const express = require('express');
const router = express.Router();  // Create an Express router
const Doctor = require('../models/Department');

// Define the route on the router
router.get('/getdepartments', async (req, res) => {
    try {
      // Fetch department records from the database
      const department = await Doctor.find().exec();
      
      res.json(department);
    } catch (error) {
      console.error('Error fetching department records:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Export the router so that it can be used in your main app
module.exports = router;
