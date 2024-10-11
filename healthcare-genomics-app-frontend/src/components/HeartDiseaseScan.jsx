/* eslint-disable no-unused-vars */
import React from 'react';
import { Paper, Typography } from '@mui/material';
import '../styles/common.css';

const HeartDiseaseScan = () => {
  return (
    <Paper className="heart-scan">
      <Typography variant="h5">Heart Disease Risk</Typography>
      <Typography variant="body1">Analyze your heart health based on genetic and clinical data.</Typography>
    </Paper>
  );
};

export default HeartDiseaseScan;