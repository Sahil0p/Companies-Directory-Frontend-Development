import { useContext } from "react";
import { CompanyContext } from "../context/CompanyContext";

export const useCompanies = () => {
  return useContext(CompanyContext);
};
