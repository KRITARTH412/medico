import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Services() {
    const navigate = useNavigate();
    const [departmentData, setDepartmentData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3003/api/departments/getdepartments');
                const data = await response.json();
                setDepartmentData(data[0].specialties);
            } catch (error) {
                console.error('Error fetching department records:', error);
            }
        };

        fetchData();
    }, []);

    const handleClick = () => {
        navigate('/doctorslist', { state: { departments: departmentData } });
    };

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {departmentData?.map((data,index)=>
          <Card key={index} sx={{ width: 300, margin: '10px' }}>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1-uaqnGjap2tAQxu3NyNbfjHfFQ62bFEng&usqp=CAU"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data ? data : 'Loading...'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
      )}
      </div>
    );
}
