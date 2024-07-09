import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const DoctorCard = ({ name, speciality, location, imageUrl }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #ccc', padding: 2, borderRadius: 1, minWidth: 200, backgroundColor:"#fff" }}>
      <Box component="img" src={imageUrl} alt={name} sx={{ width: 210, height: 180,marginTop: -1.5, marginBottom: 1, borderRadius: 1 }} />
      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body1">{speciality}</Typography>
      </Box>
      <Button variant="contained" sx={{ backgroundColor: '#1BA9B5', '&:hover': { backgroundColor: '#1BA9B5' } }}>
        Consult
      </Button>
    </Box>
  );
};

export default DoctorCard;

