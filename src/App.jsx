import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { getDesignTokens } from "./theme";
import { CompanyProvider } from "./context/CompanyContext";
import HomePage from "./pages/HomePage";
import React, { useState, useMemo } from "react";

const App = () => {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleTheme = () => {
    setMode(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CompanyProvider>
        <HomePage toggleTheme={toggleTheme} darkMode={mode === "dark"} />
      </CompanyProvider>
    </ThemeProvider>
  );
};
export default App;
