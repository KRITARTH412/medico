import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('./login');
  };

  const goToPage = (page) => {
    navigate(`./${page.toLowerCase()}`);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const menuItems = ['Home', 'Aboutus', 'Services'];

  return (
    <>
      <Box sx={{ flexGrow: 1, width: '100%' }}>
        <AppBar position="static" sx={{ backgroundColor: 'white', color: '#10217D' }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                color: '#10217D',
              }}
            >
              Medico
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  sx={{
                    marginRight: 2,
                    fontFamily: 'Poppins, sans-serif',
                    '&:hover': {
                      textDecoration: 'underline',
                      textDecorationColor: '#527C88',
                      textDecorationThickness: '2px',
                      color: '#527C88',
                    },
                  }}
                  onClick={() => goToPage(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Button
              color="inherit"
              sx={{
                display: { xs: 'block', sm: 'none' },
                fontWeight: 600,
              }}
              onClick={goToLoginPage}
            >
              Login
            </Button>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                ml: 2,
                display: { xs: 'block', sm: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Button
              color="inherit"
              sx={{
                display: { xs: 'none', sm: 'block' },
                fontWeight: 600,
              }}
              onClick={goToLoginPage}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List sx={{ backgroundColor: 'white', color: '#10217D' }}>
            {menuItems.map((item) => (
              <ListItem button key={item} onClick={() => goToPage(item)}>
                <Typography variant="h6" color="inherit" sx={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
      <Box sx={{ padding: '10px' }}>
      </Box>
    </>
  );
}
