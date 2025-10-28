import { Advocate } from "../../../api/advocates/types";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  const av = a[orderBy];
  const bv = b[orderBy];

  if (Array.isArray(av) || Array.isArray(bv)) return 0;

  if (bv < av) return -1;
  if (bv > av) return 1;
  return 0;
}

export function getComparator<Key extends keyof Advocate>(
  order: Order,
  orderBy: Key
): (a: Advocate, b: Advocate) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
