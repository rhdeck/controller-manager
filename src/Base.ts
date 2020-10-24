import { encodeComponent, undefinedIfError } from "@raydeck/id-components";
import { Sessionable } from "@raydeck/session-manager";
import { serialize } from "uri-js";
import { trigger, addListener as _addListener } from "@raydeck/event-manager";
export default abstract class Base implements Sessionable {
  id?: { [key: string]: any };
  init({ id }: { id?: any }) {
    if (id) this.id = this.toId(id);
  }
  abstract async get<T>(key: string, def?: T): Promise<T>;
  abstract async getAll(): Promise<{ [key: string]: any }>;
  abstract async set(key: string, value: any): Promise<void>;
  abstract async delete(): Promise<void>;
  async getOptional<T>(key: string, def?: T): Promise<T | undefined> {
    return await undefinedIfError<T>(async () => this.get<T>(key, def));
  }
  async exists(key: string): Promise<boolean> {
    try {
      await this.get(key);
      return true;
    } catch (e) {
      return false;
    }
  }
  toId(id: string | { [key: string]: any }): { [key: string]: any } {
    if (typeof id === "object") return { id: id.id };
    return { id };
  }
  getId(): string {
    return this.getIdObject().id;
  }
  getIdObject(): { [key: string]: any } {
    if (typeof this.id === "undefined") throw new Error("id is undefined");
    return this.id;
  }
  mock(): { [key: string]: any } {
    return {};
  }
  getUri() {
    const scheme = this.scheme;
    const host = this.getId().toLowerCase();
    return serialize({ scheme, host: encodeComponent(host) });
  }
  async trigger(eventName: string, data: { [key: string]: any } = {}) {
    const outData = { ...data, _uri: this.getUri(), object: <Base>this };
    const outEventName = this.scheme + "." + eventName;
    await trigger(outEventName, outData);
  }
  scheme = "";
  static scheme = "";
  async runLater(
    eventName: string,
    when: Date,
    context?: { [key: string]: any }
  ) {
    console.error("runLater does nothing at the moment");
  }
  static async addListener<T>(
    event: string,
    handler: (object: T, args: { [key: string]: any }) => Promise<void>
  ) {
    return _addListener(
      [this.scheme, event].join("."),
      async ({ object, ...options }) => {
        if (!object)
          throw new Error("Object not set in event trigger arguments");
        if (object) handler(object, options);
      }
    );
  }
}
