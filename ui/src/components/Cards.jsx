import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';

import RectangleSvg from '../assets/img/Rectangle.svg';

const Cards = () => {
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate()

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/doctordepartment');
        break;
      case 1:
        navigate('/doctordepartment')
        // navigate('/doctorslist');
        break;
      case 2:
        navigate('/videochat');
        break;
      default:
        break;
    }
    // }
  };

  return (
    <>
    <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          width: '40%', // Adjust the width as needed
        }}
      >
        <Card>
          <CardContent>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  sx={{ indicator: { backgroundColor: '#1BA9B5' } }}
                >
                  <Tab label="Tab 1" sx={{ flexGrow: 1 }} />
                  <Tab label="Booking Appointment" sx={{ flexGrow: 1 }} />
                  <Tab label="Tab 3" sx={{ flexGrow: 1 }} />
                </Tabs>
              </Grid>
              <Grid item xs={12}>
                <ButtonGroup sx={{ width: '100%' }}>
                  <Button variant="contained"  style={{ backgroundColor: '#1BA9B5', color: 'white', width: '50%' }} sx={{ width: '50%' }}>
                    Button 1
                  </Button>
                  <Button variant="contained" style={{ backgroundColor: '#1BA9B5', color: 'white', width: '50%' }} sx={{ width: '50%' }}>
                    Button 2
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Responsive SVG Image */}
      <img
        src={RectangleSvg}
        alt="Responsive SVG"
        style={{ width: '100%', height: 'auto', zIndex: 0 }}
      />
    </>
  )
}

export default Cards
