import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Avatar,
  Box
} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const AppBarComponent = ({ toggleTheme, darkMode }) => {
  return (
    <AppBar position="fixed" color="primary" elevation={6} sx={{ zIndex: 1300 }}>
      <Toolbar>
        <Avatar sx={{ mr: 2, bgcolor: "white", color: "primary.main", fontWeight: 700 }}>
          CD
        </Avatar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}>
          Companies Directory
        </Typography>
        <Tooltip title="Toggle light/dark theme">
          <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 2 }}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
