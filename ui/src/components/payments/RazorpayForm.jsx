import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

const RazorpayForm = () => {
  const [payment, setPayment] = useState(null);
  const [amount, setAmount] = useState(0); // Initialize amount with a default value

  const initializePayment = async () => {
    try {
      // Make an API call to your server to create a Razorpay order
      const response = await axios.post('http://localhost:3003/api/create-order', {
        amount: amount , // Convert amount to paise
        currency: 'INR',
      });

      const { data } = response;
      setPayment(data);

      // Initialize Razorpay with the received order details
      const options = {
        key: 'rzp_test_wFpAIwV4qHAPQk',
        amount: data.amount,
        currency: data.currency,
        name: 'Medico',
        description: 'Medico Description',
        image: 'https://cdn.dribbble.com/users/612336/screenshots/2806600/concept_set1_small-14.png',
        order_id: data.id,
        handler: function(response) {
          // Callback function after successful payment
          console.log(response);
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error initializing payment:', error);
    }
  };

  return (
    <div>
      <h1>Razorpay Integration in React</h1>
      <div>
        <label style={{ marginLeft:"15px",marginRight:"15px" }}>Enter Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{padding:"10px"}}
        />
      </div>
      <Button onClick={initializePayment} style={{backgroundColor:"#1BA9B5",color:"#fff" , marginTop:"15px" }} >Pay with Razorpay</Button>
    </div>
  );
};

export default RazorpayForm;
