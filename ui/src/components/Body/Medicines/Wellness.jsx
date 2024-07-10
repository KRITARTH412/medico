import React from 'react';
import { Box, Typography } from '@mui/material';
import WellnessBack from '../../../assets/img/Rectangle 38.png';
import DoctorCard from './DoctorCard'; // Assuming you have DoctorCard component separately
import Medicine1 from '../../../assets/Medicines/Group 2.png'
import Medicine2 from '../../../assets/Medicines/Group 18.png'
import Medicine3 from '../../../assets/Medicines/Group 19.png'
import Medicine4 from '../../../assets/Medicines/Group 20.png'
import Medicine5 from '../../../assets/Medicines/Rectangle 18.png'

const Wellness = () => {
  return (
    <div>
      <Box sx={{ position: 'relative', width: '100%', height: { xs: '300px', sm: '400px', md: '500px' }, overflow: 'hidden' }}>
        <Box component="img" src={WellnessBack} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '85%', md: '80%' },
          backgroundColor: '#fff',
          borderRadius: 2,
          padding: { xs: 2, sm: 3, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}>
          <Typography variant="h4" sx={{ fontFamily: 'Poppins', marginBottom: 2, color: '#527C88', fontWeight: 510, fontSize: { xs: 20, md: 25 } }}>
            Shop For Medicine & Wellness
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(auto-fit, minmax(200px, 1fr))' },
            gap: 2,
            width: '100%'
          }}>
            <DoctorCard name="Dr. John Doe" speciality="Cardiologist" location="New York, NY" imageUrl={Medicine1} />
            <DoctorCard name="Dr. Jane Smith" speciality="Dermatologist" location="Los Angeles, CA" imageUrl={Medicine2} />
            <DoctorCard name="Dr. Emily Clark" speciality="Neurologist" location="Chicago, IL" imageUrl={Medicine3} />
            <DoctorCard name="Dr. Michael Brown" speciality="Pediatrician" location="Houston, TX" imageUrl={Medicine4} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Wellness;
