import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
} from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#F9FBFC', color: '#121212', py: 4, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid style={{ marginleft: 5 }} item xs={10} sm={6} md={3}>
            <Typography variant="h2" sx={{ color: '#527C88', fontFamily: 'Poppins', fontWeight: 500, fontSize: 38 }}>
              Medico
            </Typography>
            <Typography variant="body2">
              Health care refers to the efforts that medical professionals make to restore our physical and mental well-being. The term also includes the provision of services to maintain emotional well-being.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography style={{ color: "#527C88" }} variant="h6" gutterBottom>
              Overview
            </Typography>
            <Button color="inherit" sx={{ display: 'block', textAlign: 'left' }}>
              About Us
            </Button>
            <Button color="inherit" sx={{ display: 'block', textAlign: 'left' }}>
              Services
            </Button>
            <Button color="inherit" sx={{ display: 'block', textAlign: 'left' }}>
              Contact
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography style={{ color: "#527C88" }} variant="h6" gutterBottom>
              Company
            </Typography>
            <Button color="inherit" sx={{ display: 'block', textAlign: 'left' }}>
              Careers
            </Button>
            <Button color="inherit" sx={{ display: 'block', textAlign: 'left' }}>
              Press
            </Button>
            <Button color="inherit" sx={{ display: 'block', textAlign: 'left' }}>
              Blog
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography style={{ color: "#527C88" }} variant="h6" gutterBottom>
              Explore
            </Typography>
            <Button color="inherit" sx={{ display: 'block', textAlign: 'left' }}>
              Services
            </Button>
            <Button color="inherit" sx={{ display: 'block', textAlign: 'left' }}>
              Doctors
            </Button>
            <Button color="inherit" sx={{ display: 'block', textAlign: 'left' }}>
              Locations
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, borderTop: '1px solid #444', marginTop: 5 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          © 2023 MSFT Pro. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
