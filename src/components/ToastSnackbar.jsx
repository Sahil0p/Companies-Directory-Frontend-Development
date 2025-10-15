import React from "react";
import { Snackbar, Alert } from "@mui/material";

const ToastSnackbar = ({ open, handleClose, message, severity = "info" }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ToastSnackbar;
