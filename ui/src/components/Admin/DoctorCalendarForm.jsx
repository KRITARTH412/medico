import React, { useState } from 'react';
import './DoctorCalendarForm.css'

const DoctorCalendarForm = () => {
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [doctorEmail, setDoctorEmail] = useState('');

  const addTimeSlot = () => {
    // Add validation logic if needed

    // Convert start and end time to Date objects for manipulation
    const startDate = new Date(`${date} ${startTime}`);
    const endDate = new Date(`${date} ${endTime}`);
    
    // Create an array to store time slots
    const slots = [];

    // Iterate through the time range with 30-minute intervals
    let currentTime = startDate;
    while (currentTime < endDate) {
      const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      slots.push(formattedTime);
      currentTime = add30Minutes(currentTime);
    }

    // Update state with the generated time slots
    setTimeSlots([...timeSlots, { date, slots }]);
    
    // Clear input fields
    setDate('');
    setStartTime('');
    setEndTime('');
  };

  // Function to add 30 minutes to a given time
  const add30Minutes = (time) => {
    const newTime = new Date(time);
    newTime.setMinutes(newTime.getMinutes() + 30);
    return newTime;
  };

  // Function to send time slots to the backend
  const saveTimeSlots = () => {
    debugger;
    // Make a POST request to your backend API
    fetch('http://localhost:3003/api/doctors/set-time-slots', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        doctorEmail,
        timeSlots,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Time slots saved successfully:', data);
        alert('Time slots saved successfully')
        // Optionally, redirect or show a success message
      })
      .catch(error => {
        console.error('Error saving time slots:', error);
        alert('Error saving time slots')
        // Handle the error, show a message, etc.
      });
  };

  return (
    <div className="doctor-calendar-form">
      <h1>Doctor Calendar Form</h1>
      <form>
      <label htmlFor="doctorName">Doctor's Email</label>
        <input type="text" id="doctorName" value={doctorEmail} onChange={(e) => setDoctorEmail(e.target.value)} required />

        <label htmlFor="date">Select Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split('T')[0]} required />

        <label htmlFor="startTime">Start Time:</label>
        <input type="time" id="startTime" value={startTime} onChange={(e) => setStartTime(e.currentTarget.value)} step="900" required />

        <label htmlFor="endTime">End Time:</label>
        <input type="time" id="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)} step="900" required />

        <button type="button" className="addtimeslot" onClick={addTimeSlot}>Add Time Slot</button>

        <ul>
          {timeSlots?.map((slot, index) => (
            <li key={index}>{`${slot.date} - Slots: ${slot.slots.join(', ')}`}</li>
          ))}
        </ul>

        <button type="button" className="savetimeslot" onClick={saveTimeSlots}>Save Time Slots</button>
      </form>
    </div>
  );
};

export default DoctorCalendarForm;
