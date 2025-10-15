import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Divider
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
};

const CompanyModal = ({ open, handleClose, company }) => {
  if (!company) return null;

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="company-modal-title">
      <Box sx={modalStyle}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography id="company-modal-title" variant="h6" component="h2">
            {company.name}
          </Typography>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Typography sx={{ mt: 2 }}><strong>Industry:</strong> {company.industry}</Typography>
        <Typography sx={{ mt: 1 }}><strong>Location:</strong> {company.location}</Typography>
        <Typography sx={{ mt: 1 }}><strong>Employees:</strong> {company.employees}</Typography>
      </Box>
    </Modal>
  );
};

export default CompanyModal;
