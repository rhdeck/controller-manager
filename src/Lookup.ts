import DDBBase from "./DDBBase";
import { get as registryGet } from "@raydeck/registry-manager";
import { getFromUri, Sessionable } from "@raydeck/session-manager";
export default class Lookup extends DDBBase {
  constructor(id?: string) {
    super();
    this.init({
      id,
      tableName: registryGet("lookupTable"),
    });
  }
}
export async function getUri(id: string, prefix: string = "") {
  const lookup = await new Lookup(prefix + id).load();
  return await lookup.get<string>("uri");
}
export async function getObject<T>(id: string, prefix: string = "") {
  const uri = await getUri(prefix + id);
  const obj = await getFromUri<T>(uri);
  return obj;
}
export async function setObject(id: string, object: Sessionable, ttl?: Date) {
  const uri = object.getUri();
  return setUri(id, uri, ttl);
}
export async function setUri(id: string, uri: string, ttl?: Date) {
  //first look for existing value
  try {
    const testUri = await getUri(id);
    if (uri === testUri) return;
    const lookup = await new Lookup(id).load();
    await lookup.set("uri", uri);
    if (ttl) {
      await lookup.set("ttl", Math.floor(ttl.valueOf() / 1000));
    } else {
      if (await lookup.exists("ttl")) await lookup.remove("ttl");
    }
    return;
  } catch (e) {
    //There is no lookup here - let's create
    await make(id, uri, ttl);
  }
}
export async function remove(id: string) {
  try {
    const l = new Lookup();
    await l.ddb.delete(id);
  } catch (e) {
    //Nothing to do!
  }
}
async function make(id: string, uri: string, ttl?: Date) {
  const lookup = new Lookup();
  const ttlSeconds = ttl ? Math.floor(ttl.valueOf() / 1000) : undefined;
  await lookup.ddb._create({ uri, ttl: ttlSeconds }, lookup.toId(id));
  lookup.id = { id };
}
export async function removeObject(object: Sessionable) {
  const uri = object.getUri();
  return removeUri(uri);
}
export async function removeUri(uri: string) {
  //Lookup
  //@TODO implement this (doesn't do a lot of harm to leave it hanging out there since set will deal with existing records and the session getting will throw either way)
  return;
}
