import { Base } from ".";

/**
 *
 * @param boundFnc Function to retrieve a page of data. If instance required, bind function to instance to keep "this" value
 * @param args Arguments passed into boundFnc
 */
export async function getAllPages<T>(
  boundFnc: (...args: any) => Promise<[any[], string | undefined]>,
  args: any[] = []
): Promise<T[]> {
  return mapPages<T>(boundFnc, args, async (o: any) => {
    return o;
  });
}
/**
 *
 * @param boundFnc Function to retrieve a page of data. If instance required, bind function to instance to keep "this" value
 * @param args Arguments passed into boundFnc
 * @param f  Function to transform raw data retrieved by boundFnc
 */
export async function mapPages<T>(
  boundFnc: (...args: any) => Promise<[any[], string | undefined]>,
  args: any[] = [],
  f: (o: any) => Promise<any>
): Promise<T[]> {
  let results: any[] = [];
  let lastKey = null;
  let set: any[] = [];
  let nextKey: undefined | string;
  do {
    [set, nextKey] = await boundFnc(...[...args, lastKey]);
    const mappedValues = await Promise.all(set.map(f));
    results = [...results, ...mappedValues];
    lastKey = nextKey;
  } while (lastKey);
  return results;
}
