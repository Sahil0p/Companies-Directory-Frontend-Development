
// // import React from "react";
// // import { TextField, MenuItem, Box } from "@mui/material";

// // const EMPLOYEE_COUNT_RANGES = [
// //   { label: "Employee count under 50", value: [0, 50] },
// //   { label: "Employee count 50 - 100", value: [50, 100] },
// //   { label: "Employee count 100 - 200", value: [100, 200] },
// //   { label: "Employee count 200 - 300", value: [200, 300] },
// //   { label: "Employee count 300 - 400", value: [300, 400] },
// //   { label: "Employee count 400 - 500", value: [400, 500] },
// //   { label: "Employee count 500 - 800", value: [500, 800] },
// //   { label: "Employee count 800 - 1000", value: [800, 1000] },
// //   { label: "Employee count above 1000", value: [1000, Number.MAX_SAFE_INTEGER] }
// // ];

// // const CompanyFilters = ({
// //   filters, setFilters,
// //   industries, locations,
// //   employeeCountRange, setEmployeeCountRange,
// //   sort, setSort
// // }) => {
// //   const handleInputChange = e => {
// //     const { name, value } = e.target;
// //     setFilters(prev => ({ ...prev, [name]: value }));
// //   };

// //   const handleEmployeeDropdownChange = (e) => {
// //     const idx = parseInt(e.target.value, 10);
// //     setEmployeeCountRange(EMPLOYEE_COUNT_RANGES[idx].value);
// //   };

// //   const handleSortChange = (e) => {
// //     const value = e.target.value;
// //     const [field, order] = value.split("-");
// //     setSort({ field, order });
// //   };

// //   return (
// //     <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
// //       <TextField
// //         label="Company Name"
// //         variant="outlined"
// //         size="small"
// //         name="name"
// //         value={filters.name}
// //         onChange={handleInputChange}
// //         sx={{ minWidth: 200 }}
// //       />
// //       <TextField
// //         select
// //         label="Industry"
// //         name="industry"
// //         value={filters.industry}
// //         onChange={handleInputChange}
// //         size="small"
// //         sx={{ minWidth: 160 }}
// //       >
// //         <MenuItem value="">All</MenuItem>
// //         {industries.map(ind => (
// //           <MenuItem key={ind} value={ind}>{ind}</MenuItem>
// //         ))}
// //       </TextField>
// //       <TextField
// //         select
// //         label="Location"
// //         name="location"
// //         value={filters.location}
// //         onChange={handleInputChange}
// //         size="small"
// //         sx={{ minWidth: 160 }}
// //       >
// //         <MenuItem value="">All</MenuItem>
// //         {locations.map(loc => (
// //           <MenuItem key={loc} value={loc}>{loc}</MenuItem>
// //         ))}
// //       </TextField>
// //       <TextField
// //         select
// //         label="Employee Count"
// //         value={EMPLOYEE_COUNT_RANGES.findIndex(r => (
// //           r.value[0] === employeeCountRange[0] && r.value[1] === employeeCountRange[1]
// //         ))}
// //         onChange={handleEmployeeDropdownChange}
// //         size="small"
// //         sx={{ minWidth: 180 }}
// //       >
// //         {EMPLOYEE_COUNT_RANGES.map((option, idx) => (
// //           <MenuItem key={idx} value={idx}>{option.label}</MenuItem>
// //         ))}
// //       </TextField>
// //       <TextField
// //         select
// //         label="Sort by"
// //         value={`${sort.field}-${sort.order}`}
// //         onChange={handleSortChange}
// //         size="small"
// //         sx={{ minWidth: 180 }}
// //       >
// //         <MenuItem value="name-asc">Name (A-Z)</MenuItem>
// //         <MenuItem value="name-desc">Name (Z-A)</MenuItem>
// //         <MenuItem value="employees-asc">Employees (Ascending)</MenuItem>
// //         <MenuItem value="employees-desc">Employees (Descending)</MenuItem>
// //       </TextField>
// //     </Box>
// //   );
// // };

// // export default CompanyFilters;
// import React from "react";
// import { TextField, MenuItem, Box } from "@mui/material";

// const EMPLOYEE_COUNT_RANGES = [
//   { label: "Employee count under 50", value: [0, 50] },
//   { label: "Employee count 50 - 100", value: [50, 100] },
//   { label: "Employee count 100 - 200", value: [100, 200] },
//   { label: "Employee count 200 - 300", value: [200, 300] },
//   { label: "Employee count 300 - 400", value: [300, 400] },
//   { label: "Employee count 400 - 500", value: [400, 500] },
//   { label: "Employee count 500 - 800", value: [500, 800] },
//   { label: "Employee count 800 - 1000", value: [800, 1000] },
//   { label: "Employee count above 1000", value: [1000, Number.MAX_SAFE_INTEGER] }
// ];

// const CompanyFilters = ({
//   filters, setFilters,
//   industries, locations,
//   employeeCountRange, setEmployeeCountRange,
//   sort, setSort
// }) => {
//   const handleInputChange = e => {
//     const { name, value } = e.target;
//     setFilters(prev => ({ ...prev, [name]: value }));
//   };

//   const handleEmployeeDropdownChange = (e) => {
//     const idx = parseInt(e.target.value, 10);
//     setEmployeeCountRange(EMPLOYEE_COUNT_RANGES[idx].value);
//   };

//   const handleSortChange = (e) => {
//     const value = e.target.value;
//     const [field, order] = value.split("-");
//     setSort({ field, order });
//   };

//   return (
//     <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
//       <TextField
//         label="Company Name"
//         variant="outlined"
//         size="small"
//         name="name"
//         value={filters.name}
//         onChange={handleInputChange}
//         sx={{ minWidth: 200 }}
//       />
//       <TextField
//         select
//         label="Industry"
//         variant="outlined"
//         name="industry"
//         value={filters.industry}
//         onChange={handleInputChange}
//         size="small"
//         sx={{ minWidth: 160 }}
//       >
//         <MenuItem value="">All</MenuItem>
//         {industries.map(ind => (
//           <MenuItem key={ind} value={ind}>{ind}</MenuItem>
//         ))}
//       </TextField>
//       <TextField
//         select
//         label="Location"
//         variant="outlined"
//         name="location"
//         value={filters.location}
//         onChange={handleInputChange}
//         size="small"
//         sx={{ minWidth: 160 }}
//       >
//         <MenuItem value="">All</MenuItem>
//         {locations.map(loc => (
//           <MenuItem key={loc} value={loc}>{loc}</MenuItem>
//         ))}
//       </TextField>
//       <TextField
//         select
//         label="Employee Count"
//         variant="outlined"
//         value={EMPLOYEE_COUNT_RANGES.findIndex(r => (
//           r.value[0] === employeeCountRange[0] && r.value[1] === employeeCountRange[1]
//         ))}
//         onChange={handleEmployeeDropdownChange}
//         size="small"
//         sx={{ minWidth: 180 }}
//       >
//         {EMPLOYEE_COUNT_RANGES.map((option, idx) => (
//           <MenuItem key={idx} value={idx}>{option.label}</MenuItem>
//         ))}
//       </TextField>
//       <TextField
//         select
//         label="Sort by"
//         variant="outlined"
//         value={`${sort.field}-${sort.order}`}
//         onChange={handleSortChange}
//         size="small"
//         sx={{ minWidth: 180 }}
//       >
//         <MenuItem value="name-asc">Name (A-Z)</MenuItem>
//         <MenuItem value="name-desc">Name (Z-A)</MenuItem>
//         <MenuItem value="employees-asc">Employees (Ascending)</MenuItem>
//         <MenuItem value="employees-desc">Employees (Descending)</MenuItem>
//       </TextField>
//     </Box>
//   );
// };

// export default CompanyFilters;


// import React from "react";
// import { TextField, MenuItem, Box } from "@mui/material";

// const EMPLOYEE_COUNT_RANGES = [
//   { label: "Employee count under 50", value: [0, 50] },
//   { label: "Employee count 50 - 100", value: [50, 100] },
//   { label: "Employee count 100 - 200", value: [100, 200] },
//   { label: "Employee count 200 - 300", value: [200, 300] },
//   { label: "Employee count 300 - 400", value: [300, 400] },
//   { label: "Employee count 400 - 500", value: [400, 500] },
//   { label: "Employee count 500 - 800", value: [500, 800] },
//   { label: "Employee count 800 - 1000", value: [800, 1000] },
//   { label: "Employee count above 1000", value: [1000, Number.MAX_SAFE_INTEGER] }
// ];

// const CompanyFilters = ({
//   filters, setFilters,
//   industries, locations,
//   employeeCountRange, setEmployeeCountRange,
//   sort, setSort
// }) => {
//   const handleInputChange = e => {
//     const { name, value } = e.target;
//     setFilters(prev => ({ ...prev, [name]: value }));
//   };

//   const employeeCountIndex = EMPLOYEE_COUNT_RANGES.findIndex(r =>
//     r.value[0] === employeeCountRange[0] && r.value[1] === employeeCountRange[1]
//   );

//   const handleEmployeeDropdownChange = (e) => {
//     const idx = parseInt(e.target.value, 10);
//     setEmployeeCountRange(EMPLOYEE_COUNT_RANGES[idx].value);
//   };

//   const handleSortChange = (e) => {
//     const value = e.target.value;
//     const [field, order] = value.split("-");
//     setSort({ field, order });
//   };

//   return (
//     <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
//       <TextField
//         label="Company Name"
//         variant="outlined"
//         size="small"
//         name="name"
//         value={filters.name}
//         onChange={handleInputChange}
//         sx={{ minWidth: 200 }}
//       />
//       <TextField
//         select
//         label="Industry"
//         variant="outlined"
//         name="industry"
//         value={filters.industry}
//         onChange={handleInputChange}
//         size="small"
//         sx={{ minWidth: 160 }}
//       >
//         <MenuItem value="">All</MenuItem>
//         {industries.map(ind => (
//           <MenuItem key={ind} value={ind}>{ind}</MenuItem>
//         ))}
//       </TextField>
//       <TextField
//         select
//         label="Location"
//         variant="outlined"
//         name="location"
//         value={filters.location}
//         onChange={handleInputChange}
//         size="small"
//         sx={{ minWidth: 160 }}
//       >
//         <MenuItem value="">All</MenuItem>
//         {locations.map(loc => (
//           <MenuItem key={loc} value={loc}>{loc}</MenuItem>
//         ))}
//       </TextField>
//       <TextField
//         select
//         label="Employee Count"
//         variant="outlined"
//         value={employeeCountIndex === -1 ? 0 : employeeCountIndex}
//         onChange={handleEmployeeDropdownChange}
//         size="small"
//         sx={{ minWidth: 180 }}
//       >
//         {EMPLOYEE_COUNT_RANGES.map((option, idx) => (
//           <MenuItem key={idx} value={idx}>{option.label}</MenuItem>
//         ))}
//       </TextField>
//       <TextField
//         select
//         label="Sort by"
//         variant="outlined"
//         value={`${sort.field}-${sort.order}`}
//         onChange={handleSortChange}
//         size="small"
//         sx={{ minWidth: 180 }}
//       >
//         <MenuItem value="name-asc">Name (A-Z)</MenuItem>
//         <MenuItem value="name-desc">Name (Z-A)</MenuItem>
//         <MenuItem value="employees-asc">Employees (Ascending)</MenuItem>
//         <MenuItem value="employees-desc">Employees (Descending)</MenuItem>
//       </TextField>
//     </Box>
//   );
// };

// export default CompanyFilters;

import React from "react";
import { TextField, MenuItem, Box } from "@mui/material";

const EMPLOYEE_COUNT_RANGES = [
  { label: "Employee count under 50", value: "0-50" },
  { label: "Employee count 50 - 100", value: "50-100" },
  { label: "Employee count 100 - 200", value: "100-200" },
  { label: "Employee count 200 - 300", value: "200-300" },
  { label: "Employee count 300 - 400", value: "300-400" },
  { label: "Employee count 400 - 500", value: "400-500" },
  { label: "Employee count 500 - 800", value: "500-800" },
  { label: "Employee count 800 - 1000", value: "800-1000" },
  { label: "Employee count above 1000", value: "1000-99999" }
];

const SORT_OPTIONS = [
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "name-desc", label: "Name (Z-A)" },
  { value: "employees-asc", label: "Employees (Ascending)" },
  { value: "employees-desc", label: "Employees (Descending)" }
];

const CompanyFilters = ({
  filters, setFilters,
  industries, locations,
  employeeCountRange, setEmployeeCountRange,
  sort, setSort
}) => {
  // Convert current range to a string for value matching
  const employeeRangeToString = ([min, max]) => `${min}-${max === Number.MAX_SAFE_INTEGER ? 99999 : max}`;
  const currentEmpValue = employeeRangeToString(employeeCountRange);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // Handle dropdown selects using string syntax for value
  const handleEmployeeDropdownChange = (e) => {
    const [min, max] = e.target.value.split("-").map(Number);
    setEmployeeCountRange([min, max]);
  };

  const handleSortChange = (e) => {
    const [field, order] = e.target.value.split("-");
    setSort({ field, order });
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
      <TextField
        label="Company Name"
        variant="outlined"
        size="small"
        name="name"
        value={filters.name}
        onChange={handleInputChange}
        sx={{ minWidth: 200 }}
      />
      <TextField
        select
        label="Industry"
        variant="outlined"
        name="industry"
        value={filters.industry}
        onChange={handleInputChange}
        size="small"
        sx={{ minWidth: 160 }}
      >
        <MenuItem value="">All</MenuItem>
        {industries.map(ind => (
          <MenuItem key={ind} value={ind}>{ind}</MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Location"
        variant="outlined"
        name="location"
        value={filters.location}
        onChange={handleInputChange}
        size="small"
        sx={{ minWidth: 160 }}
      >
        <MenuItem value="">All</MenuItem>
        {locations.map(loc => (
          <MenuItem key={loc} value={loc}>{loc}</MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Employee Count"
        variant="outlined"
        value={currentEmpValue}
        onChange={handleEmployeeDropdownChange}
        size="small"
        sx={{ minWidth: 180 }}
      >
        {EMPLOYEE_COUNT_RANGES.map((option) => (
          <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Sort by"
        variant="outlined"
        value={`${sort.field}-${sort.order}`}
        onChange={handleSortChange}
        size="small"
        sx={{ minWidth: 180 }}
      >
        {SORT_OPTIONS.map(opt => (
          <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default CompanyFilters;
