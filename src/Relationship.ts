import DDBBase from "./DDBBase";
import { queryPage } from "@raydeck/ddb-manager";
import { get as registryGet } from "@raydeck/registry-manager";
import { makeCompoundId, parseCompoundId } from "@raydeck/id-components";
import { getFromId, Schemable } from "@raydeck/session-manager";
export default class Relationship extends DDBBase {
  constructor(id?: string) {
    super();
    this.init({
      id,
      tableName: registryGet("lookupTable"),
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
export async function getValuesPage(
  id: string,
  lastKey?: string
): Promise<[string[], string | undefined]> {
  const [items, cursor] = await queryPage(
    { TableName: registryGet("relationshipTable"), Key: "id", Value: id },
    lastKey
  );
  const ids = (<{ id: string; value: string }[]>items).map(
    ({ value }: { value: string }) => value
  );
  return [ids, cursor];
}
export async function getValuesObjects<T>(
  schemeOrClass: Schemable | string,
  id: string,
  lastKey?: string
): Promise<[T[], string | undefined]> {
  const [values, nextKey] = await getValuesPage(id, lastKey);
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
  id: string,
  lastKey?: string
): Promise<[string[], string | undefined]> {
  const [items, cursor] = await queryPage(
    {
      TableName: registryGet("relationshipTable"),
      Key: "value",
      Value: id,
      IndexName: registryGet("relationshipValueIndex"),
    },
    lastKey
  );
  const ids = (<{ id: string; value: string }[]>items).map(
    ({ value }: { value: string }) => value
  );
  return [ids, cursor];
}
export async function getIdsObjects<T>(
  schemeOrClass: Schemable | string,
  value: string,
  lastKey?: string
): Promise<[T[], string | undefined]> {
  const [values, nextKey] = await getIdsPage(value, lastKey);
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
export async function set(id: string, value: string) {
  const relationship = new Relationship();
  await relationship.ddb._create({}, relationship.toId({ id, value }));
  relationship.id = { id, value };
}

export async function remove(id: string, value: string) {
  const relationship = new Relationship(makeCompoundId(id, value));
  await relationship.delete();
}

export async function clear(id: string, lastCursor?: string): Promise<void> {
  const [values, nextCursor] = await getValuesPage(id, lastCursor);
  if (values)
    await Promise.all(
      values.map((value) => {
        return remove(id, value);
      })
    );
  if (nextCursor) return clear(id, nextCursor);
}

export async function clearValue(
  value: string,
  lastCursor?: string
): Promise<void> {
  const [ids, nextCursor] = await getIdsPage(value, lastCursor);
  if (ids)
    await Promise.all(
      ids.map((id) => {
        return remove(id, value);
      })
    );
  if (nextCursor) return clearValue(value, nextCursor);
}
