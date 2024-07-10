import React from 'react';
import { Box, Typography } from '@mui/material';

const TestimonialCard = ({ text, reviewer, title }) => {
    return (
        <Box sx={{
            border: '1px solid #ccc',
            padding: 3,
            borderRadius: 1,
            backgroundColor: '#ECEEF9',
            boxShadow: 3,
            maxWidth: '600px',
            margin: '0 auto'
        }}>
            <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Poppins' }}>
                {text}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontFamily: 'Poppins' }}>
                    {reviewer}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'Poppins' }}>
                    {title}
                </Typography>
            </Box>
        </Box>
    );
};

export default TestimonialCard;
