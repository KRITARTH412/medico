// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Services from './components/Services.jsx';
import DoctorDetails from './components/Doctor/DoctorDetails';
import HomePage from './components/HomePage';
import DoctorsList from './components/Doctor/DoctorsList';
import UserForm from './components/Users/UserForm';
import RazorpayForm from './components/payments/RazorpayForm';
import DoctorDepartment from './components/Doctor/DoctorDepartments';
import DoctorCalenderForm from './components/Admin/DoctorCalendarForm';
import VideoChat from './components/VideoChat';

function App() {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch token from the server
    axios.post('http://localhost:3003/api/token', { identity: 'username' })
      .then(response => {
        console.log('Token response:', response.data.token);
        setToken(response.data.token);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching token:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    // You can render a loading indicator here if needed
    return <div>Loading...</div>;
  }


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctordetails" element={<DoctorDetails />} />
          <Route path="/doctorslist" element={<DoctorsList />} />
          <Route path="/userform" element={<UserForm />} />
          <Route path="/razorpay" element={<RazorpayForm />} />
          <Route path="/doctordepartment" element={<DoctorDepartment />} />
          <Route path="/doctorcalenderform" element={<DoctorCalenderForm />} />
          <Route path="/videochat" element={<VideoChat token={token} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
