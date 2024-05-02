import React, { useState } from "react";
import { useNavigate } from "react-router";
import '../Admin/DoctorCalendarForm.css'
import { Calendar } from 'primereact/calendar';
import Button from "@mui/material/Button";
import 'primereact/resources/themes/saga-blue/theme.css'; // Import PrimeReact theme
import 'primereact/resources/primereact.min.css'; // Import PrimeReact styles
import 'primeicons/primeicons.css'; // Import PrimeIcons

export default function IconDemo() {
  const navigate=useNavigate();
  const today = new Date();

  const [date, setDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [appointmentType, setAppointmentType] = useState(null);
  const [selectedTimeslot,setselectedTimeslot]=useState(false);

  // Function to fetch and update available time slots based on the selected date
  const fetchAvailableTimeSlots = (selectedDate) => {
    // Replace this with your actual logic to fetch available time slots
    const fakeTimeSlots = [
      '9:00 AM', '10:00 AM', '11:00 AM',
      '1:00 PM', '2:00 PM', '3:00 PM',
      '5:00 PM', '6:00 PM', '7:00 PM',
    ];
    setAvailableTimeSlots(fakeTimeSlots);
  };

  // Update available time slots when the date changes
  const handleDateChange = (e) => {
    const selectedDate = e.value;
    setSelectedDate(selectedDate);
    fetchAvailableTimeSlots(selectedDate);
  };

  // Update appointment type when radio button changes
  const handleRadioChange = (event) => {
    setAppointmentType(event.target.value);
  };

  const handlePayment = () =>{
    setselectedTimeslot(true)
  }

  const handlePaymentButton = () =>{
     navigate('/razorpay')
  }

  return (
    <div className="card flex flex-wrap gap-3 p-fluid doctor-calendar-form" >
      <div className="flex-auto">
        <label htmlFor="appointmentType" className="font-bold block mb-2">
          Select Appointment Type:
        </label>
        <div>
          <input
            type="radio"
            id="offline"
            name="appointmentType"
            value="offline"
            checked={appointmentType === 'offline'}
            onChange={handleRadioChange}
          />
          <label htmlFor="offline" className="ml-2 mr-4">Offline</label>

          <input
            type="radio"
            id="online"
            name="appointmentType"
            value="online"
            checked={appointmentType === 'online'}
            onChange={handleRadioChange}
          />
          <label htmlFor="online" className="ml-2">Online</label>
        </div>

        <div>
          <label htmlFor="buttondisplay" className="font-bold block mb-2 mt-3">
            Select Appointment Date
          </label>

          <Calendar
            value={selectedDate}
            onChange={handleDateChange}
            showIcon
            iconDisplay="input"
            className="small-input"  minDate={today} disabled={!appointmentType} readOnlyInput />

          {availableTimeSlots.length > 0 && (
            <div className="flex-container mt-3">
              <label className="font-bold mr-2">Available Time Slots:</label>
              {availableTimeSlots.map((time, index) => (
                <button key={index} className="time-button" onClick={handlePayment}>{time}</button>
              ))}
            </div>
          )}
          <Button onClick={ handlePaymentButton } style={{backgroundColor:"#1BA9B5",color:"#fff" }} disabled={!selectedTimeslot}>Proceed For Payment</Button>
        </div>
      </div>
    </div>
  );
}

// Include the CSS directly in the same file using the style tag
const styles = `
  .flex-container {
    display: flex;
    margin-top: 10px;
  }

  .time-button {
    background-color: #3498db;
    color: #fff;
    border: 1px solid #2980b9;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-right: 8px;
  }

  .time-button:hover {
    background-color: #2980b9;
  }
`;

// Inject the styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
