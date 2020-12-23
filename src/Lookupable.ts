import DDBBase from "./DDBBase";
import { setObject, removeObject, remove, getObject, getUri } from "./Lookup";
import { Sessionable } from "@raydeck/session-manager";
import {
  set as setRelationship,
  remove as removeRelationship,
} from "./Relationship";
import Base from "./Base";
export default abstract class Lookupable extends DDBBase {
  async setLookup(value: string, prefix: string, ttl?: Date) {
    await setObject(prefix + value, this, ttl);
  }
  async removeLookup(value: string, prefix: string) {
    const uri = await getUri(prefix + value);
    if (uri === this.getUri()) await remove(prefix + value);
    else
      throw new Error(
        prefix + value + " is not a valid lookup for " + this.getUri()
      );
  }
  async clearLookups(prefix?: string) {
    console.error("clearLookups does not do anything yet");
  }
  async addRelationship(valueOrObject: String | Base, prefix: string) {
    const value =
      typeof valueOrObject === "string"
        ? valueOrObject
        : (<Base>valueOrObject).getId();
    await Promise.all([setRelationship(this.getId(), value, prefix)]);
  }
  async removeRelationship(valueOrObject: String | Base, prefix: string) {
    const value =
      typeof valueOrObject === "string"
        ? valueOrObject
        : (<Base>valueOrObject).getId();
    await removeRelationship(this.getId(), value, prefix);
  }
  async removeValueRelationship(idOrObject: String | Base, prefix: string) {
    const id =
      typeof idOrObject === "string" ? idOrObject : (<Base>idOrObject).getId();
    await removeRelationship(id, this.getId(), prefix);
  }
}
