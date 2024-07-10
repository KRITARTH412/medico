import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import DoctorCard from './DoctorCard'; // Assuming you create this component separately
import Doc1 from '../../../assets/Doctorspic/Doc1.png'
import Doc2 from '../../../assets/Doctorspic/Doc2.png'
import Doc3 from '../../../assets/Doctorspic/Doc3.png'
import Doc4 from '../../../assets/Doctorspic/Doc4.png'
import Doc5 from '../../../assets/Doctorspic/Doc6.png'
import Doc6 from '../../../assets/Doctorspic/Doc7.png'

const TopRatedDoctors = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#F9FBFC' }}>
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', marginTop: 5, marginBottom: 3 }}>
        <Typography variant="h2" sx={{ color: '#10217D', fontFamily: 'Poppins', fontWeight: 510, fontSize: 38 }}>
          TOP Rated
        </Typography>
        <Typography variant="h2" sx={{ color: '#527C88', fontFamily: 'Poppins', fontWeight: 510, fontSize: 38 }}>
          Doctors
        </Typography>
        <Typography variant="h2" sx={{ color: '#10217D', fontFamily: 'Poppins', fontWeight: 510, fontSize: 38 }}>
          Near You
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', overflowX: 'scroll', gap: 2, padding: 1 }}>
        {/* Example Doctor Cards */}
        <DoctorCard name="Dr. John Doe" speciality="Cardiologist" location="New York, NY" imageUrl={Doc1} />
        <DoctorCard name="Dr. Jane Smith" speciality="Dermatologist" location="Los Angeles, CA" imageUrl={Doc2} />
        <DoctorCard name="Dr. John Doe" speciality="Cardiologist" location="New York, NY" imageUrl={Doc3} />
        <DoctorCard name="Dr. John Doe" speciality="Cardiologist" location="New York, NY" imageUrl={Doc4} />
        <DoctorCard name="Dr. John Doe" speciality="Cardiologist" location="New York, NY" imageUrl={Doc5} />
        <DoctorCard name="Dr. John Doe" speciality="Cardiologist" location="New York, NY" imageUrl={Doc6} />
        <DoctorCard name="Dr. John Doe" speciality="Cardiologist" location="New York, NY" imageUrl={Doc1} />
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
