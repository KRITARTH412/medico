const Razorpay = require('razorpay');

const initializeRazorpay = (key_id, key_secret) => {
  const razorpay = new Razorpay({
    key_id,
    key_secret,
  });

  const createOrder = async (amount, currency, receipt, notes) => {
    const options = {
      amount: amount * 100,
      currency,
      receipt,
      payment_capture: 1, 
      notes,
    };

    try {
      const response = await razorpay.orders.create(options);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create order');
    }
  };
  return { createOrder };
};

module.exports = initializeRazorpay;
