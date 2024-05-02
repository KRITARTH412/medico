import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DoctorCard = ({ doctor }) => {

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/userform')
        // navigate('/razorpay')
    }

  return (
    <>
    <Card sx={{ maxWidth: 500, margin:3 }}>
      <CardMedia
        component="img"
        alt={doctor.username}
        height="140"
        width="325"
        src={require(`../../images/${doctor.image}`)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {doctor.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {doctor.summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick}  size="small" >Paymnet</Button>
        <Button size="small" onClick={handleClick}>Booking Appointment</Button>
      </CardActions>
    </Card>
    </>
  );
};

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3003/api/doctors/get-doctors', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }

        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {doctors.map((doctor) => (
        <>
        <DoctorCard key={doctor._id} doctor={doctor} />
        </>
      ))}
    </div>
  );
};

export default DoctorList;
