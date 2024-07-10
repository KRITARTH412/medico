import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import DoctorCard from './HealthProgramCard'; // Assuming you create this component separately
import HealthProgram1 from '../../../assets/HealthPro/Group 9422.png'
import HealthProgram2 from '../../../assets/HealthPro/Group 9434.png'

const HealthProgram = () => {
    return (
        <Box sx={{ padding: 2, backgroundColor: '#F9FBFC' }}>
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', marginTop: 5, marginBottom: 3 }}>
                <Typography variant="h2" sx={{ color: '#527C88', fontFamily: 'Poppins', fontWeight: 510, fontSize: 38 }}>
                    HealthCare
                </Typography>
                <Typography variant="h2" sx={{ color: '#10217D', fontFamily: 'Poppins', fontWeight: 510, fontSize: 38 }}>
                    Programs
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', overflowX: 'scroll', gap: 2, padding: 1 }}>
                {/* Example Doctor Cards */}
                <DoctorCard name="Complete Nutrition" speciality="The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn't produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors." location="New York, NY" imageUrl={HealthProgram1} cost="$200" />
                <DoctorCard name="Healthcare" speciality="The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn't produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors." location="Los Angeles, CA" imageUrl={HealthProgram2} cost="$200" />
                <DoctorCard name="Diabetic Care" speciality="The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is because the pancreas doesn't produce enough insulin. Both type 1 and type 2 diabetes may be caused by a combination of genetic or environmental factors." location="New York, NY" imageUrl={HealthProgram1} cost="$200" />
            </Box>
            {/* <Box sx={{ textAlign: 'center', marginTop: 2 }}>
        <Button variant="contained" sx={{ backgroundColor: '#1BA9B5', '&:hover': { backgroundColor: '#1BA9B5' } }}>
          View All
        </Button>
      </Box> */}
        </Box>
    );
};

export default HealthProgram;
