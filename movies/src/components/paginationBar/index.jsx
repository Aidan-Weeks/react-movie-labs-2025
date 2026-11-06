import React from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

const PaginationBar = ({ page, totalPages, onPageChange }) => {
  if (!totalPages || totalPages <= 1) return null;

  const handleChange = (event, value) => {
    onPageChange(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%", my: 4 }}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
      />
    </Box>
  );
};

export default PaginationBar;