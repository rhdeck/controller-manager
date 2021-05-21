import Base from "./Base";
import { DDBHandler } from "@raydeck/ddb-manager";
export default class DDBBase extends Base {
  public ddb!: DDBHandler;
  init({
    tableName,
    id,
    partitionKey = "id",
  }: {
    tableName: string;
    id?: string | { [key: string]: any };
    partitionKey?: string;
  }) {
    super.init({ id });
    this.ddb = new DDBHandler(tableName, partitionKey);
  }
  async load() {
    if (!this.ddb) throw "DDB not set/initialized";
    if (!this.id) throw "id not set/initialized";
    //Let's load it up!
    await this.ddb.load(this.toId(this.id));
    return this;
  }
  async loadFromItem(Item: { [key: string]: any }) {
    await this.ddb.loadFromItem(Item);
    this.id = this.toId(Item);
    this.ddb.id = { ...this.id }; //avoiding reference to same pointer
    return this;
  }
  async get<T>(key: string, def?: T): Promise<T> {
    if (key === "id") {
      return <T>(<unknown>this.getId());
    }
    if (!this.ddb.loaded) throw "DDB object not loaded";
    if (key.includes(".")) {
      const [topKey, ...restOfKeys] = key.split(".");
      try {
        const container = await this.get<{ [key: string]: any }>(topKey);
        let tempContainer: any = container;
        restOfKeys.forEach((key) => {
          tempContainer = tempContainer[key];
        });
        return <T>tempContainer;
      } catch (e) {
        if (typeof def === "undefined") {
          throw new Error(
            `Value for ${key} not found in ${this.getUri()}. Assign a value or provide a default`
          );
        }

        return def;
      }
    } else {
      const temp = await this.ddb.get(key);
      if (typeof temp !== "undefined") return <T>temp;
      if (typeof this.mock()[key] !== "undefined") return <T>this.mock()[key];
      if (typeof def === "undefined") {
        throw new Error(
          `Value for ${key} not found in ${this.getUri()}. Assign a value or provide a default`
        );
      }

      return def;
    }
  }
  async getAll<
    T extends { [key: string]: any } = { [key: string]: any }
  >(): Promise<T> {
    return { ...this.mock(), ...this.ddb.cachedValues } as T;
  }
  getSync<T>(key: string, def?: T): T {
    if (typeof this.ddb.cachedValues[key] !== undefined)
      return this.ddb.cachedValues[key];
    if (typeof def !== undefined && def) return def;
    throw new Error(
      `Value for ${key} not found in ${this.getUri()}. Assign a value or provide a default`
    );
  }
  async set(key: string | object, value?: any) {
    if (typeof value === "undefined" && typeof key !== "object") {
      return this.remove(key);
    }
    if (typeof key === "object") {
      return this.ddb.setValues(key);
    } else {
      return this.ddb.set(key, value);
    }
  }
  async increment(key: string, byValue: number = 1) {
    await this.ddb.increment(key, byValue);
  }
  async remove(key: string) {
    await this.ddb.remove(key);
  }
  async delete() {
    return this.ddb.delete();
  }
  static DDBHandler = DDBHandler;
}
