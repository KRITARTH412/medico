const mongoose = require('mongoose');

const timeSlotSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  slots: {
    type: [String], 
    default: [],
  },
});


const doctorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  numberOfPatients: {
    type: Number,
    default: 0,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: [String],
    default: [],
  },
  anecdote: {
    type: String,
  },
  summary: {
    type: String,
  },
  image: {
    type: String,
  },
  timeSlots: {
    type: [timeSlotSchema],
    default: [],
  },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
