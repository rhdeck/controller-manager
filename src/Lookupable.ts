import DDBBase from "./DDBBase";
import { setObject, removeObject } from "./Lookup";
import { Sessionable } from "@raydeck/session-manager";
import {
  set as setRelationship,
  remove as removeRelationship,
} from "./Relationship";
import Base from "./Base";
export default abstract class Lookupable extends DDBBase {
  async setLookup(value: string, prefix: string) {
    await setObject(prefix + ":" + value, this);
  }
  async clearLookups() {
    console.error("clearLookups does not do anythiing yet");
  }
  async addRelationship(valueOrObject: String | Base) {
    const value =
      typeof valueOrObject === "string"
        ? valueOrObject
        : (<Base>valueOrObject).getId();
    await Promise.all([setRelationship(this.getId(), value)]);
  }
  async removeRelationship(valueOrObject: String | Base) {
    const value =
      typeof valueOrObject === "string"
        ? valueOrObject
        : (<Base>valueOrObject).getId();
    await Promise.all([
      removeRelationship(this.getId(), value),
      removeRelationship(value, this.getId()),
    ]);
  }
}
