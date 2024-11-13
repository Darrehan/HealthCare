/* eslint-disable no-unused-vars */
import React from 'react';
import { Paper, Typography } from '@mui/material';
import '../styles/common.css';

const DiseaseRisk = () => {
  return (
    <Paper className="disease-risk">
      <Typography variant="h4">Disease Risk Prediction</Typography>
      <Typography variant="body1">Predict the likelihood of specific diseases based on your genetic data.</Typography>
    </Paper>
  );
};

export default DiseaseRisk;