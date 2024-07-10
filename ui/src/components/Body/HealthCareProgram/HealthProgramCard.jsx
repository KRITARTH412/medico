import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';

const HealthProgramCard = ({ name, speciality, location, imageUrl, cost }) => {
    return (
        <Box sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 1, minWidth: 400, backgroundColor: "#fff", display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 600, height: 300 }}>
            <Avatar src={imageUrl} alt={name} sx={{ width: 50, height: 50, marginBottom: 2 }} />
            <Box sx={{ textAlign: 'left', marginBottom: 2 }}>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body2" sx={{ color: "#6C87AE" }}>{speciality}</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 3 }}>
                <Typography variant="h6" sx={{ alignSelf: 'center', color: "#1BA9B5" }}>{cost}</Typography>
                <Button variant="contained" sx={{ backgroundColor: '#1BA9B5', '&:hover': { backgroundColor: '#1BA9B5' } }}>
                    Book Now
                </Button>
            </Box>
        </Box>
    );
};

export default HealthProgramCard;
