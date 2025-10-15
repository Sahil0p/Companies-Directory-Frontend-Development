// src/components/Filters.jsx

import { TextField, MenuItem } from "@mui/material";

const Filters = ({ filter, setFilter, industries, locations }) => (
  <div style={{ marginBottom: 20, display: "flex", gap: 16 }}>
    <TextField
      label="Company Name"
      variant="outlined"
      value={filter.name}
      onChange={e => setFilter(prev => ({ ...prev, name: e.target.value }))}
    />
    <TextField
      label="Industry"
      select
      value={filter.industry}
      onChange={e => setFilter(prev => ({ ...prev, industry: e.target.value }))}
    >
      <MenuItem value="">All</MenuItem>
      {industries.map(industry => (
        <MenuItem key={industry} value={industry}>{industry}</MenuItem>
      ))}
    </TextField>
    <TextField
      label="Location"
      select
      value={filter.location}
      onChange={e => setFilter(prev => ({ ...prev, location: e.target.value }))}
    >
      <MenuItem value="">All</MenuItem>
      {locations.map(location => (
        <MenuItem key={location} value={location}>{location}</MenuItem>
      ))}
    </TextField>
  </div>
);

export default Filters;
