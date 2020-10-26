import DDBBase from "./DDBBase";
import { get as registryGet } from "@raydeck/registry-manager";
import { makeCompoundId, parseCompoundId } from "@raydeck/id-components";
import { Sessionable } from "@raydeck/session-manager/lib/types";
import { queryPage } from "@raydeck/ddb-manager";
import { setMakeEvent } from "./Base";
export default class Event extends DDBBase {
  constructor(uri?: string, date?: string) {
    super();
    this.init({
      id: { uri, date },
      tableName: registryGet("eventTable"),
      partitionKey: "uri",
    });
  }
  toId(id: string | { event: string; date: string }) {
    if (typeof id === "string") {
      const [hashId, value] = parseCompoundId(id);
      return { id: hashId, value };
    }
    return id;
  }
  getId() {
    const { uri, date } = this.getIdObject();
    return makeCompoundId(uri, date);
  }
  async log(event: string, context: { [key: string]: any } = {}) {
    /*no op*/
  }
}

export async function make(payload: {
  event: string;
  uri: string;
  context?: { [key: string]: any };
  date?: Date;
}) {
  if (!payload.date) payload.date = new Date();
  const t = new Event();
  await t.ddb._create(
    {
      context: payload.context,
      event: payload.event,
    },
    {
      uri: payload.uri,
      date: new Date(payload.date).toISOString(),
    }
  );
}
export async function page(
  objectOrId: string | Sessionable,
  lastKey?: string
): Promise<[events: Event[], newLastKey: string | undefined]> {
  if (typeof objectOrId !== "string") objectOrId = objectOrId.getUri();
  const [items, newLastKey] = await queryPage(
    { TableName: registryGet("eventTable"), Key: "uri", Value: objectOrId },
    lastKey
  );
  const events = await Promise.all(
    items.map(async (item) => {
      return new Event().loadFromItem(item);
    })
  );
  return [events, newLastKey];
}
setMakeEvent(make);
