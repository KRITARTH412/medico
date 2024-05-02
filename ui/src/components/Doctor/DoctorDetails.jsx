import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const DoctorDetails = () => {
    const [formData, setFormData] = useState({
        username: '',
        degree: '',
        specialization: '',
        address: '',
        phoneNumber: '',
        email: '',
        experience: '',
        anecdote: '',
        summary: '',
    });

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setImage(e.target.files[0]);
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const apiUrl = 'http://localhost:3003/api/doctors/add-doctor';
            const token = localStorage.getItem('token');

            const formDataWithImage = new FormData();
            formDataWithImage.append('image', image); // Append the image file to FormData

            // Append other form data to FormData
            Object.keys(formData).forEach((key) => {
                formDataWithImage.append(key, formData[key]);
            });

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`, // Include the token in the headers
                },
                body: formDataWithImage,
            });

            if (response.ok) {
                console.log('Data submitted successfully');
                alert('Data submitted successfully');
            } else {
                console.error('Failed to submit data');
                alert('Failed to submit data');
            }
        } catch (error) {
            console.error('Error during data submission:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: 'auto' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        required
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Degree"
                        variant="outlined"
                        fullWidth
                        required
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Specialization"
                        variant="outlined"
                        fullWidth
                        required
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Address"
                        variant="outlined"
                        fullWidth
                        required
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        required
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Experience"
                        variant="outlined"
                        fullWidth
                        required
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Anecdote"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        required
                        name="anecdote"
                        value={formData.anecdote}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Summary"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        required
                        name="summary"
                        value={formData.summary}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default DoctorDetails;
