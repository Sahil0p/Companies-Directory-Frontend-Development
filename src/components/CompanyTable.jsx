import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper
} from "@mui/material";

const CompanyTable = ({ companies, sort, setSort }) => (
  <Paper elevation={3} sx={{ mb: 3 }}>
    <Table>
      <TableHead>
        <TableRow>
          {["name", "industry", "location", "employees"].map(field => (
            <TableCell key={field}>
              <TableSortLabel
                active={sort.field === field}
                direction={sort.order}
                onClick={() =>
                  setSort(prev => ({
                    field,
                    order:
                      prev.field === field && prev.order === "asc"
                        ? "desc"
                        : "asc",
                  }))
                }
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {companies.map(company => (
          <TableRow key={company.id}>
            <TableCell>{company.name}</TableCell>
            <TableCell>{company.industry}</TableCell>
            <TableCell>{company.location}</TableCell>
            <TableCell>{company.employees}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default CompanyTable;
