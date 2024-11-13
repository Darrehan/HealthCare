/* eslint-disable no-unused-vars */
import React from 'react';
import { Paper, Typography } from '@mui/material';
import '../styles/common.css';

const EyeDiseaseScan = () => {
  return (
    <Paper className="eye-scan">
      <Typography variant="h5">Eye Disease Scan</Typography>
      <Typography variant="body1">Upload eye images to analyze and detect potential diseases.</Typography>
    </Paper>
  );
};

export default EyeDiseaseScan;