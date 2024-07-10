import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';

const QuickConsultCard = ({ name, speciality, location, imageUrl }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, borderRadius: 2, padding: 2, backgroundColor: '#D8EFF1' }}>
            <Avatar src={imageUrl} alt={name} sx={{ width: 50, height: 50, marginRight: 2, marginBottom: 2 }} />
            <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                <Typography variant="body1" sx={{ fontFamily: 'Poppins', color: "#527C88", fontWeight: 400 }}>{speciality}</Typography>
            </Box>
        </Box>
    );
};

export default QuickConsultCard;
