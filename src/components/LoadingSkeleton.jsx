import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";

const LoadingSkeleton = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Stack spacing={1}>
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} variant="rectangular" height={100} />
        ))}
      </Stack>
    </Box>
  );
};

export default LoadingSkeleton;
