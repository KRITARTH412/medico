import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button } from '@mui/material';

export const Home = () => {
  const [name1, setName] = useState('');
  const navigate = useNavigate();

  const onChangeValue = (e) => {
    setName(e.target.value);
  };

  const submitRoom = useCallback(() => {
    navigate(`/room/${name1}`);
  }, [navigate, name1]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh', // Adjust as needed
        backgroundColor: '#F9FBFC', // Example background color
        padding: 4, // Example padding for spacing
      }}
    >
      <Box sx={{ maxWidth: 400, width: '100%', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Video Call
        </Typography>
        <TextField
          fullWidth
          type="text"
          value={name1}
          onChange={(e) => onChangeValue(e)}
          placeholder="Room ID"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={submitRoom}
          sx={{ backgroundColor: '#1BA9B5', '&:hover': { backgroundColor: '#0d8e99' }, mb: 2 }}
        >
          Join
        </Button>
      </Box>
    </Box>
  );
};
