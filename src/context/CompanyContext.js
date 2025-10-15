
import React, { createContext, useState, useEffect } from "react";
import { fetchCompanies } from "../api/companyService";

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [allCompanies, setAllCompanies] = useState([]);  // full data
  const [companies, setCompanies] = useState([]);        // paged display data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({ name: "", industry: "", location: "" });
  const [employeeCountRange, setEmployeeCountRange] = useState([0, 1000]);

  const [sort, setSort] = useState({ field: "name", order: "asc" });

  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;

//   useEffect(() => {
//     fetchCompanies()
//       .then(data => {
//         setAllCompanies(data);
//         setLoading(false);
//         const maxEmployees = Math.max(...data.map(c => c.employees));
//         setEmployeeCountRange([0, maxEmployees]);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

useEffect(() => {
    fetchCompanies()
      .then(data => {
        // Expect response shape: { companies: [...] }
        if (data.companies && Array.isArray(data.companies)) {
          setAllCompanies(data.companies);
          const maxEmployees = Math.max(...data.companies.map(c => c.employees));
          setEmployeeCountRange([0, maxEmployees]);
        } else {
          setAllCompanies([]);
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  

  useEffect(() => {
    // Filtering full data each time filters or employeeCountRange or sort changes
    let filtered = allCompanies.filter(company => {
      return (
        company.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        (filters.industry ? company.industry === filters.industry : true) &&
        (filters.location ? company.location === filters.location : true) &&
        company.employees >= employeeCountRange[0] &&
        company.employees <= employeeCountRange[1]
      );
    });

    filtered.sort((a, b) => {
      const { field, order } = sort;
      if (a[field] < b[field]) return order === "asc" ? -1 : 1;
      if (a[field] > b[field]) return order === "asc" ? 1 : -1;
      return 0;
    });

    // Paginate by cumulative data for infinite scroll (append new pages)
    const sliced = filtered.slice(0, page * PAGE_SIZE);

    setCompanies(sliced);
  }, [allCompanies, filters, employeeCountRange, sort, page]);

  const totalFilteredCount = allCompanies.filter(company => {
    return (
      company.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      (filters.industry ? company.industry === filters.industry : true) &&
      (filters.location ? company.location === filters.location : true) &&
      company.employees >= employeeCountRange[0] &&
      company.employees <= employeeCountRange[1]
    );
  }).length;

  const totalPages = Math.ceil(totalFilteredCount / PAGE_SIZE);

  const allIndustries = [...new Set(allCompanies.map(c => c.industry))];
  const allLocations = [...new Set(allCompanies.map(c => c.location))];

  return (
    <CompanyContext.Provider value={{
      companies,
      loading,
      error,
      filters,
      setFilters,
      employeeCountRange,
      setEmployeeCountRange,
      sort,
      setSort,
      page,
      setPage,
      totalPages,
      allIndustries,
      allLocations,
    }}>
      {children}
    </CompanyContext.Provider>
  );
};
