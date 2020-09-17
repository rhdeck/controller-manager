import DDBBase from "./DDBBase";
import { queryPage } from "@raydeck/ddb-manager";
import { get as registryGet } from "@raydeck/registry-manager";
import { makeCompoundId, parseCompoundId } from "@raydeck/id-components";
import { getFromId, Schemable } from "@raydeck/session-manager";
import { Relationship_clearValue } from ".";
export default class Relationship extends DDBBase {
  constructor(id?: string) {
    super();
    this.init({
      id,
      tableName: registryGet("relationshipTable"),
      partitionKey: "id",
    });
  }
  toId(id: string | { id: string; value: string }) {
    if (typeof id === "string") {
      const [hashId, value] = parseCompoundId(id);
      return { id: hashId, value };
    }
    return id;
  }
  getId() {
    const { id, value } = this.getIdObject();
    return makeCompoundId(id, value);
  }
}
export async function get(id: string, value: string, prefix: string) {
  return new Relationship(makeCompoundId(prefix + id, value)).load();
}
export async function getValuesPage(
  id: string,
  prefix: string,
  lastKey?: string
): Promise<[string[], string | undefined]> {
  const [items, cursor] = await queryPage(
    {
      TableName: registryGet("relationshipTable"),
      Key: "id",
      Value: prefix + id,
    },
    lastKey
  );
  const values = (<{ value: string }[]>items).map(
    ({ value }: { value: string }) => value
  );
  return [values, cursor];
}
export async function getValuesObjects<T>(
  schemeOrClass: Schemable | string,
  id: string,
  prefix: string,
  lastKey?: string
): Promise<[T[], string | undefined]> {
  const [values, nextKey] = await getValuesPage(id, prefix, lastKey);
  const objectsOrUndefineds = await Promise.all(
    values.map(async (value) => {
      try {
        const o = await getFromId<T>(schemeOrClass, value);
        return o;
      } catch (e) {
        return undefined;
      }
    })
  );
  const objects = <T[]>objectsOrUndefineds.filter((o) => !!o);
  return [objects, nextKey];
}
export async function getIdsPage(
  value: string,
  prefix: string,
  lastKey?: string
): Promise<[string[], string | undefined]> {
  const [items, cursor] = await queryPage(
    {
      TableName: registryGet("relationshipTable"),
      Key: "value",
      Value: value,
      IndexName: registryGet("relationshipValueIndex"),
    },
    lastKey
  );
  const ids = (<{ id: string; value: string }[]>items)
    .filter(({ id }) => {
      id.startsWith(prefix);
    })
    .map(({ value }: { value: string }) => value.substring(prefix.length));
  return [ids, cursor];
}
export async function getIdsObjects<T>(
  schemeOrClass: Schemable | string,
  value: string,
  prefix: string,
  lastKey?: string
): Promise<[T[], string | undefined]> {
  const [values, nextKey] = await getIdsPage(value, prefix, lastKey);
  const objectsOrUndefineds = await Promise.all(
    values.map(async (value) => {
      try {
        const o = await getFromId<T>(schemeOrClass, value);
        return o;
      } catch (e) {
        return undefined;
      }
    })
  );
  const objects = <T[]>objectsOrUndefineds.filter((o) => !!o);
  return [objects, nextKey];
}
export async function set(id: string, value: string, prefix: string) {
  const relationship = new Relationship();
  await relationship.ddb._create(
    {},
    relationship.toId({ id: prefix + id, value })
  );
  relationship.id = { id: prefix + id, value };
}

export async function remove(id: string, value: string, prefix: string) {
  const relationship = new Relationship(makeCompoundId(prefix + id, value));
  await relationship.delete();
}

export async function clear(id: string, prefix: string) {
  return _clear(id, prefix);
}
async function _clear(
  id: string,
  prefix: string,
  lastCursor?: string
): Promise<void> {
  const [values, nextCursor] = await getValuesPage(id, prefix, lastCursor);
  if (values)
    await Promise.all(
      values.map((value) => {
        return remove(id, value, prefix);
      })
    );
  if (nextCursor) return _clear(id, prefix, nextCursor);
}

export async function clearValue(value: string, prefix: string) {
  return _clearValue(value, prefix);
}
async function _clearValue(
  value: string,
  prefix: string,
  lastCursor?: string
): Promise<void> {
  const [ids, nextCursor] = await getIdsPage(value, prefix, lastCursor);
  if (ids)
    await Promise.all(
      ids.map((id) => {
        return remove(id, value, prefix);
      })
    );
  if (nextCursor) return _clearValue(value, prefix, nextCursor);
}
