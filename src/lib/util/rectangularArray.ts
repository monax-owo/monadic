import { logger } from "$lib/util/logger";

const rectangularArrayGen = <T>(y: number, x: number, item: T): T[][] => {
  if (item === "" || !item) logger.error("item is nullish or empty");
  return [...Array(y)].map(() => Array(x).fill(item));
};

export { rectangularArrayGen };
