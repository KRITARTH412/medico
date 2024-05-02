// razorpayRoutes.js

const express = require('express');
const initializeRazorpay = require('./razorpay');

const router = express.Router();

// Ensure that the environment variables are set correctly
// const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = process.env;

// Initialize Razorpay
// console.log("process.env.RAZORPAY_KEY_ID, process.env.RAZORPAY_KEY_SECRET",process.env)
// const { createOrder, handleWebhook } = initializeRazorpay(process.env.RAZORPAY_KEY_ID, process.env.RAZORPAY_KEY_SECRET);

router.post('/create-order', async (req, res) => {
  const { amount, currency, receipt, notes } = req.body;

  try {
    const response = await createOrder(amount, currency, receipt, notes);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Handle the Razorpay webhook endpoint (optional)
// router.post('/razorpay-webhook', handleWebhook);

module.exports = router;
