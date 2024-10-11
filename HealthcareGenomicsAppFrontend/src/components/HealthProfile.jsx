/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../styles/common.css';

const HealthProfile = () => {
  return (
    <Card className="profile-card">
      <CardContent>
        <Typography variant="h5">Your Health Profile</Typography>
        <Typography variant="body2">Personalized health data based on genomic analysis.</Typography>
      </CardContent>
    </Card>
  );
};

export default HealthProfile;