import React from "react";
import { Pagination, Box, Select, MenuItem } from "@mui/material";

const PaginationControls = ({
  page,
  totalPages,
  setPage,
  pageSize,
  setPageSize,
  pageSizeOptions = [6, 12, 24],
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3 }}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(e, value) => setPage(value)}
        color="primary"
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <span>Page size:</span>
        <Select
          size="small"
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
        >
          {pageSizeOptions.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

export default PaginationControls;
