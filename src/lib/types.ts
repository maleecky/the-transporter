import React from "react";

export interface Props {
  children: React.ReactNode;
}

export type iconLink = {
  children: React.ReactNode;
  path: string;
};

export type Order = "asc" | "desc";

export interface Data {
  id: number;
  order: string;
  dateModified: string;
  product: string;
  amount: string;
  client: string;
  destination: string;
  status: string;
  action: string;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
export interface EnhancedTableToolbarProps {
  numSelected: number;
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: unknown, newPage: number) => void;
}

type options = { id: number; label: string };

export type tags = {
  id: number;
  label: string;
  dropdown: options[] | boolean;
  active?: boolean;
};
