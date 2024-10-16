/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import '../styles/common.css';

const Dashboard = () => {
  return (
    <Paper className="dashboard">
      <Typography variant="h4" gutterBottom>Personalized Health Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className="dashboard-item">Health Overview</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className="dashboard-item">Genomic insights</Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Dashboard;