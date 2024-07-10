import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const DoctorCard = ({ name, speciality, location, imageUrl }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #ccc', padding: 2, borderRadius: 1, backgroundColor: '#fff' }}>
            <Box component="img" src={imageUrl} alt={name} sx={{ width: 150, height: 150, marginBottom: 2 }} />
            <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>{speciality}</Typography>
            </Box>
        </Box>
    );
};

export default DoctorCard;
