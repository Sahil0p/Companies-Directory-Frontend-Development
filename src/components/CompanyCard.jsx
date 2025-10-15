
import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
// import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useTheme } from "@mui/material/styles";

const CARD_HEIGHT = 160; // Fixed height for all cards

const CompanyCard = ({ company }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        minWidth: 275,
        height: CARD_HEIGHT,
        display: "flex",
        alignItems: "center",
        background: theme.palette.mode === "dark"
          ? "linear-gradient(135deg, #23272b 0%, #141516 100%)"
          : "linear-gradient(135deg, #e3f2fd 0%, #fff 100%)",
        boxShadow: 8,
        borderRadius: 4,
        transition: "transform 0.2s, box-shadow 0.2s",
        padding: 1.5,
        "&:hover": { transform: "scale(1.04)", boxShadow: 16, cursor: "pointer" }
      }}
    >
      <Avatar sx={{ bgcolor: "primary.main", mr: 2, color: "primary.contrastText" }}>
        <ApartmentIcon />
      </Avatar>
      <CardContent
        sx={{
          flex: 1,
          p: 0,
          color: theme.palette.text.primary,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%"
        }}
      >
        <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
          {company.name}
        </Typography>
        <Typography fontSize={15}>{company.industry}</Typography>
        <Typography fontSize={14}>{company.location}</Typography>
        <Typography variant="body2" fontWeight={600}>
          Employees: {company.employees}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
