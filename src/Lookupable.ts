import DDBBase from "./DDBBase";
import { setObject } from "./Lookup";

export default abstract class Lookupable extends DDBBase {
  async setLookup(value: string, prefix: string) {
    await setObject(prefix + ":" + value, this);
  }
}
