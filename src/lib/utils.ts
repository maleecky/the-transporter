import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Data, Order } from "./types";
import { ReactElement } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export function createData(
  id: number,
  order: string,
  dateModified: string,
  product: string,
  amount: string,
  client: string,
  destination: string,
  status: "Pending" | "Loading" | "Transit" | "Delivered",
  action: string
) {
  return {
    id,
    order,
    dateModified,
    product,
    amount,
    client,
    destination,
    status,
    action,
  };
}

export const isSelected = (id: number, selected: number[]) =>
  selected.indexOf(id) !== -1;

export const emptyRowsCalc = (
  page: number,
  rowsPerPage: number,
  rows: Data[]
) => (page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0);

export const visibleRowsCalc = (
  rows: Readonly<Data>[],
  order: Order,
  orderBy: string,
  page: number,
  rowsPerPage: number
) =>
  stableSort(rows, getComparator(order, orderBy)).slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
