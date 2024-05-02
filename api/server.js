const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const cors = require('cors');
const path = require('path');
const initializeRazorpay = require('./routes/razorpay');
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;


const identity = 'user';

// Create Video Grant
const videoGrant = new VideoGrant({
  room: 'cool room',
});

// dotenv is a Node.js module that loads environment variables from a file named .env into process.env.
dotenv.config();

const app = express();
const { PORT, MONGODB_URI, RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET,TWILIO_ACCOUNT_SID,TWILIO_API_KEY_SID,TWILIO_API_KEY_SECRET } = process.env;

// Use the cors middleware
app.use(cors());

// When you use express.json() middleware in your Express.js application, it intercepts requests and checks if they have a Content-Type of application/json. If so, it reads the raw JSON data from the request body and parses it into a JavaScript object.
app.use(express.json());

// The authRoutes router is "mounted" at the specified path (/api/auth). This means that all routes defined in authRoutes will be accessible under the path /api/auth in your application.
app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/departments', departmentRoutes);
app.get('/uploads/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'uploads', filename);

  // You may want to add error handling here
  res.sendFile(filePath);
});

//making connection to database
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const razorpay = initializeRazorpay(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET);

app.post('/api/token', (req, res) => {
  // const identity = req.body.identity;
  const userId  = '1';
  const roomSid = '564';
  const identity = 'user';
  const token = new AccessToken(
    TWILIO_ACCOUNT_SID,
    TWILIO_API_KEY_SID,
    TWILIO_API_KEY_SECRET,
    {identity: identity},
    {ttl:14400}
  );

  // token.identity = identity;
  token.addGrant(videoGrant);

  return res.status(200).send({
    userId: userId,
    roomSid: roomSid,
    token: token.toJwt(),
  });
});


// Create an API endpoint to initiate a payment
app.post('/api/create-order', async (req, res) => {
  const { amount, currency, receipt, notes } = req.body;

  try {
    const response = await razorpay.createOrder(amount, currency, receipt, notes);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Handle the Razorpay webhook endpoint (optional)
app.post('/api/razorpay-webhook', (req, res) => {
  res.json({ status: 'Webhook received' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
