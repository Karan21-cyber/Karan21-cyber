import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box sx={{ display: 'flex', justifyContent:"center",paddingBlock:"25%"}} minHeight="95vh">
      <CircularProgress />
    </Box>
  );
}