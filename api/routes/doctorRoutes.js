const express = require('express');
const router = express.Router();
const multer = require('multer');
const Doctor = require('../models/Doctor');
const path = require('path');
const { authenticateToken } = require('../middlewares/authMiddleware');

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, '../ui/src/images');
  },
  filename: function (req, file, cb) {
    return cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename
  },
});

const upload = multer({ storage: storage });

// Create a new doctor
router.post('/add-doctor', authenticateToken, upload.single('image'), async (req, res) => {
  // Extract user information from the token
  // const { email } = req.user;

  // Additional information for the doctor from the request body
  const {
    username,
    degree,
    specialization,
    address,
    phoneNumber,
    email,
    experience,
    numberOfPatients,
    ratings,
    reviews,
    anecdote,
    summary,
  } = req.body;

  // File information from the uploaded file
  const imageFileName = req.file.filename;
  console.log('imageFileName:', req.file)

  try {
    // Check if the doctor with the provided email already exists
    const existingDoctor = await Doctor.findOne({ email });

    if (existingDoctor) {
      return res.status(400).json({ error: 'Doctor record already exists for this user.' });
    }

    // Create a new doctor instance
    const doctor = new Doctor({
      username,
      degree,
      specialization,
      address,
      phoneNumber,
      email,
      experience,
      numberOfPatients,
      ratings,
      reviews,
      anecdote,
      summary,
      image: req.file.filename, // Save the image URL in the database
    });

    await doctor.save();
    res.status(201).json({ message: 'Doctor details added successfully.' });
  } catch (error) {
    console.error('Error in add-doctor route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific doctor by ID
router.get('/get-doctor/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.json(doctor);
  } catch (error) {
    console.error('Error in get-doctor route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/get-doctors', authenticateToken, async (req, res) => {
  try {
    const doctors = await Doctor.find();

    // Convert Buffer data to base64-encoded data URL for each doctor
    const doctorsWithBase64Image = doctors.map((doctor) => {
      if (doctor.image && doctor.image.data) {
        return {
          ...doctor.toObject(),
          image: `data:image/jpeg;base64,${Buffer.from(doctor.image.data).toString('base64')}`,
        };
      } else {
        // If image data is not available, return the doctor without modifying the image property
        return { ...doctor.toObject() };
      }
    });

    res.json(doctorsWithBase64Image);
  } catch (error) {
    console.error('Error in get-doctors route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/set-time-slots', async (req, res) => {
  try {
    const { doctorEmail, timeSlots } = req.body;

    const doctor = await Doctor.findOne({ email: doctorEmail });

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    doctor.timeSlots = timeSlots;

    await doctor.save();

    res.json({ message: 'Time slots set successfully' });
  } catch (error) {
    console.error('Error setting time slots:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Update a doctor by ID
router.put('/update-doctor/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findByIdAndUpdate(id, req.body, { new: true });
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.json({ message: 'Doctor details updated successfully.' });
  } catch (error) {
    console.error('Error in update-doctor route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a doctor by ID
router.delete('/delete-doctor/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findByIdAndRemove(id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.json({ message: 'Doctor deleted successfully.' });
  } catch (error) {
    console.error('Error in delete-doctor route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
