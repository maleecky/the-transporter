import { EnhancedTableToolbarProps } from "@/lib/types";

import * as React from "react";
import { alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import SearchEngine from "../../search-engine";
import { TablePagination } from "@mui/material";

export default function EnhancedTableToolbar(
  props: Readonly<EnhancedTableToolbarProps>
) {
  const { numSelected, count, rowsPerPage, page, onPageChange } = props;

  return (
    <Toolbar
      sx={{
        width: "100%",
        padding: 0,
        margin: 0,
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <div className="w-full flex gap-3 justify-center flex-col ">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Orders</h2>
            <div className="flex items-center gap-6 ">
              <Button variant="ghost" className="!p-0 font-normal h-0">
                <PlusCircle width={15} />
                <span className="ml-1">New</span>
              </Button>

              {count > 0 && (
                <TablePagination
                  count={count}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  onPageChange={onPageChange}
                  rowsPerPageOptions={[]} // Remove rows per page selector
                  component="div"
                  labelRowsPerPage="" // Remove the label "Rows per page"
                  labelDisplayedRows={({ from, to, count }) =>
                    `${from}-${to} of ${count}`
                  } // Custom label
                  sx={{
                    display: "flex",
                    alignItems: "center", // Vertically center the pagination
                    justifyContent: "flex-end",
                    position: "relative",
                    top: "1px",
                    ".MuiTablePagination-toolbar": {
                      padding: "0", // Remove padding
                      minHeight: "auto", // Remove minimum height to prevent overflow
                    },
                    ".MuiTablePagination-spacer": {
                      display: "none", // Remove unnecessary spacer
                    },
                    ".MuiTablePagination-actions": {
                      marginLeft: 0,
                    },
                  }}
                />
              )}
            </div>
          </div>
          <div className="flex-1 ">
            <SearchEngine />
          </div>
        </div>
      )}
      {numSelected > 0 && (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
