
import React, { useState, useRef, useCallback } from "react";
import { Grid, Container, Typography, Box, Alert, Fade } from "@mui/material";
import { useCompanies } from "../hooks/useCompanies";
import AppBarComponent from "../components/AppBar";
import CompanyCard from "../components/CompanyCard";
import CompanyFilters from "../components/CompanyFilters";
import CompanyModal from "../components/CompanyModal";
import LoadingSkeleton from "../components/LoadingSkeleton";

const HomePage = ({ toggleTheme, darkMode }) => {
  const {
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
  } = useCompanies();

  const [selectedCompany, setSelectedCompany] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const observer = useRef();

  // Last element infinite scroll ref
  const lastCompanyRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new window.IntersectionObserver(entries => {
        if (entries[0].isIntersecting && page < totalPages) {
          setPage(page + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, page, totalPages, setPage]
  );

  const handleCardClick = (company) => {
    setSelectedCompany(company);
    setModalOpen(true);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: darkMode ? "background.default" : "#f1f7fa", transition: "background 0.4s" }}>
      <AppBarComponent toggleTheme={toggleTheme} darkMode={darkMode} />
      <Container sx={{ pt: 12, pb: 10 }}>
        <Typography variant="h4" gutterBottom fontWeight={600}>
          Companies Directory
        </Typography>
        <CompanyFilters
          filters={filters}
          setFilters={setFilters}
          industries={allIndustries}
          locations={allLocations}
          employeeCountRange={employeeCountRange}
          setEmployeeCountRange={setEmployeeCountRange}
          sort={sort}
          setSort={setSort}
        />
        {loading && page === 1 ? (
          <LoadingSkeleton />
        ) : error ? (
          <Fade in={!!error}><Alert severity="error">{error}</Alert></Fade>
        ) : (
          <Grid container columns={16} columnSpacing={4} rowSpacing={4} sx={{ my: 3 }}>
            {companies.map((company, index) => {
              if (companies.length === index + 1) {
                // last visible card for infinite scroll
                return (
                  <Grid key={company.id} gridColumn="span 4" ref={lastCompanyRef}>
                    <Box onClick={() => handleCardClick(company)}>
                      <CompanyCard company={company} />
                    </Box>
                  </Grid>
                );
              } else {
                return (
                  <Grid key={company.id} gridColumn="span 4">
                    <Box onClick={() => handleCardClick(company)}>
                      <CompanyCard company={company} />
                    </Box>
                  </Grid>
                );
              }
            })}
          </Grid>
        )}
        {/* Loading for additional scroll */}
        {loading && page > 1 && <LoadingSkeleton />}
        <CompanyModal open={modalOpen} handleClose={() => setModalOpen(false)} company={selectedCompany} />
      </Container>
      <Box
        component="footer"
        sx={{
          width: "100%",
          position: "fixed",
          left: 0,
          bottom: 0,
          textAlign: "center",
          py: 2,
          bgcolor: "primary.main",
          color: "primary.contrastText",
          zIndex: 1201,
        }}
      >
        &copy; {new Date().getFullYear()} Companies Directory
      </Box>
    </Box>
  );
};

export default HomePage;
