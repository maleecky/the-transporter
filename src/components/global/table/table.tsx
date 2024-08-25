"use client";

import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { rows } from "@/lib/constants";
import EnhancedTableToolbar from "./(components)/enhancedtTable-toolbar";
import EnhancedTableHead from "./column";
import { getComparator, stableSort } from "@/lib/utils";
import { Data, Order } from "@/lib/types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 13,
  },
});

const TableUi = ({
  currentPage,
  query,
}: {
  currentPage: number;
  query: string;
}) => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("id");
  const [selected, setSelected] = React.useState<number[]>([]);
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 25;

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const filtered = rows.filter((row) => {
    if (query) {
      return row.client.toLowerCase().includes(query.toLowerCase());
    }
    return row;
  });

  const visibleRows = stableSort(filtered, getComparator(order, orderBy)).slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        <Paper
          sx={{
            width: "100%",
            mb: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            border: "1px solid transparent",
            boxShadow: "none",
          }}
        >
          <TableContainer sx={{ overflowY: "hidden" }}>
            <div className="absolute left-0 mx-4   right-0">
              <EnhancedTableToolbar
                numSelected={selected.length}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
              />
            </div>
            <Table
              sx={{
                marginTop: 18,
                overflowX: "auto",
                minWidth: "min-content",
              }}
              aria-labelledby="tableTitle"
              size={"medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody className="relative flex-1">
                {visibleRows.length > 0 ? (
                  visibleRows.map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        className="whitespace-nowrap"
                      >
                        <TableCell padding="none">
                          <Checkbox
                            color="primary"
                            onClick={(event) => handleClick(event, row.id)}
                            checked={isItemSelected}
                            size="small"
                            className="p-0"
                            sx={{
                              padding: 0,
                            }}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="normal"
                        >
                          {row.order}
                        </TableCell>
                        <TableCell align="left">{row.dateModified}</TableCell>
                        <TableCell align="left">{row.product}</TableCell>
                        <TableCell align="left">{row.amount}</TableCell>
                        <TableCell align="left">{row.client}</TableCell>
                        <TableCell align="left">
                          <div
                            className={`flex items-center gap-1 w-max rounded-full ${
                              row.status === "Delivered" ? "text-green-800" : ""
                            } ${
                              row.status === "Pending" ? "text-red-800" : ""
                            } ${row.status === "Transit" ? "text-black" : ""}`}
                          >
                            <div
                              className={`p-[4px] rounded-full ${
                                row.status === "Delivered" ? "bg-green-800" : ""
                              } ${
                                row.status === "Pending" ? "bg-red-600" : ""
                              } ${
                                row.status === "Transit" ? "bg-slate-800" : ""
                              }`}
                            ></div>
                            {row.status}
                          </div>
                        </TableCell>
                        <TableCell align="left">{row.destination}</TableCell>
                        <TableCell align="left">{row.action}</TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow className="relative ">
                    <TableCell className="absolute text-xs  whitespace-nowrap left-0  border-none text-muted-foreground">
                      No data to show
                      <Link
                        className="underline ml-1 text-[#1e1e1e]"
                        href="/new-order"
                      >
                        Add{" "}
                      </Link>
                    </TableCell>
                  </TableRow>
                )}

                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 33 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={8} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default TableUi;
