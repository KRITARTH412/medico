import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard'; // Ensure correct import path
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const feedbacks = [
    {
        text: "The service was excellent and the staff was very supportive. Highly recommend!",
        reviewer: "John Doe",
        title: "Software Engineer",
    },
    {
        text: "Amazing experience, the doctors were very attentive and professional.",
        reviewer: "Jane Smith",
        title: "Marketing Manager",
    },
    {
        text: "Very satisfied with the treatment I received. Will definitely come back if needed.",
        reviewer: "Alice Brown",
        title: "Project Manager",
    },
    {
        text: "Friendly environment and great care. Thank you!",
        reviewer: "Bob Johnson",
        title: "Teacher",
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <Box sx={{ padding: 4, backgroundColor: '#F9FBFC', textAlign: 'center' }}>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 3 }}>
                <Typography variant="h2" sx={{ color: '#527C88', fontFamily: 'Poppins', fontWeight: 600, fontSize: 38 }}>
                    Our
                </Typography>
                <Typography variant="h2" sx={{ color: '#10217D', fontFamily: 'Poppins', fontWeight: 600, fontSize: 38 }}>
                    Patients
                </Typography>
                <Typography variant="h2" sx={{ color: '#527C88', fontFamily: 'Poppins', fontWeight: 600, fontSize: 38 }}>
                    Feedback about us
                </Typography>
            </Box>
            <Slider {...settings}>
                {feedbacks.map((feedback, index) => (
                    <TestimonialCard key={index} {...feedback} />
                ))}
            </Slider>
        </Box>
    );
};

export default Testimonial;
