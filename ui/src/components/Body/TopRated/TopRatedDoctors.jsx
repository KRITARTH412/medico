import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import DoctorCard from './DoctorCard'; // Assuming you create this component separately

const TopRatedDoctors = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#F9FBFC' }}>
      <Box sx={{ display: 'flex', gap: 1 ,justifyContent: 'center',marginTop:5,marginBottom:3}}>
        <Typography variant="h2" sx={{ color: '#10217D', fontFamily: 'Poppins' }}>
          TOP Rated
        </Typography>
        <Typography variant="h2" sx={{ color: '#527C88', fontFamily: 'Poppins'}}>
          Doctors
        </Typography>
        <Typography variant="h2" sx={{ color: '#10217D', fontFamily: 'Poppins' }}>
          Near You
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', overflowX: 'scroll', gap: 2, padding: 1 }}>
        {/* Example Doctor Cards */}
        <DoctorCard name="Dr. John Doe" speciality="Cardiologist" location="New York, NY" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3n-wWu-cOhc47szWNDh1I5B9UIxiGCgdYmTZ-6qlj0jhzyVeLRghEEy0Lew&s" />
        <DoctorCard name="Dr. Jane Smith" speciality="Dermatologist" location="Los Angeles, CA" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3n-wWu-cOhc47szWNDh1I5B9UIxiGCgdYmTZ-6qlj0jhzyVeLRghEEy0Lew&s" />
        <DoctorCard name="Dr. John Doe" speciality="Cardiologist" location="New York, NY" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3n-wWu-cOhc47szWNDh1I5B9UIxiGCgdYmTZ-6qlj0jhzyVeLRghEEy0Lew&s" />
        <DoctorCard name="Dr. John Doe" speciality="Cardiologist" location="New York, NY" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3n-wWu-cOhc47szWNDh1I5B9UIxiGCgdYmTZ-6qlj0jhzyVeLRghEEy0Lew&s" />
        <DoctorCard name="Dr. John Doe" speciality="Cardiologist" location="New York, NY" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3n-wWu-cOhc47szWNDh1I5B9UIxiGCgdYmTZ-6qlj0jhzyVeLRghEEy0Lew&s" />
        <DoctorCard name="Dr. John Doe" speciality="Cardiologist" location="New York, NY" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3n-wWu-cOhc47szWNDh1I5B9UIxiGCgdYmTZ-6qlj0jhzyVeLRghEEy0Lew&s" />
        {/* <DoctorCard name="Dr. John Doe" speciality="Cardiologist" location="New York, NY" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3n-wWu-cOhc47szWNDh1I5B9UIxiGCgdYmTZ-6qlj0jhzyVeLRghEEy0Lew&s" /> */}
        {/* Add more DoctorCard components as needed */}
      </Box>
      {/* <Box sx={{ textAlign: 'center', marginTop: 2 }}>
        <Button variant="contained" sx={{ backgroundColor: '#1BA9B5', '&:hover': { backgroundColor: '#1BA9B5' } }}>
          View All
        </Button>
      </Box> */}
    </Box>
  );
};

export default TopRatedDoctors;
