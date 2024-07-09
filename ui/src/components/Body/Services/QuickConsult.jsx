import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import DoctorCard from './QuickConsultCard'; // Assuming you create this component separately

const QuickConsult = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box sx={{ padding: 2, backgroundColor: '#F9FBFC' }}>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center',marginBottom:3 }}>
        <Typography variant="h2" sx={{ color: '#527C88', fontFamily: 'Poppins', fontWeight: 400 }}>
          Quick
        </Typography>
        <Typography variant="h2" sx={{ color: '#10217D', fontFamily: 'Poppins', fontWeight: 400 }}>
          Consult For
        </Typography>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(6, 1fr)', gap: 2, padding: 1 }}>
        {/* Example Doctor Cards */}
        <DoctorCard name="Dr. John Doe" speciality="Cardiologist" location="New York, NY" imageUrl="https://via.placeholder.com/150" />
        <DoctorCard name="Dr. Jane Smith" speciality="Dermatologist" location="Los Angeles, CA" imageUrl="https://via.placeholder.com/150" />
        <DoctorCard name="Dr. Emily Clark" speciality="Neurologist" location="Chicago, IL" imageUrl="https://via.placeholder.com/150" />
        <DoctorCard name="Dr. Michael Brown" speciality="Pediatrician" location="Houston, TX" imageUrl="https://via.placeholder.com/150" />
        <DoctorCard name="Dr. Sarah Wilson" speciality="Orthopedic" location="Phoenix, AZ" imageUrl="https://via.placeholder.com/150" />
        <DoctorCard name="Dr. David Miller" speciality="General Practitioner" location="Philadelphia, PA" imageUrl="https://via.placeholder.com/150" />
        <DoctorCard name="Dr. David Miller" speciality="General Practitioner" location="Philadelphia, PA" imageUrl="https://via.placeholder.com/150" />
        {/* Add more DoctorCard components as needed */}
      </Box>
    </Box>
  );
};

export default QuickConsult;
