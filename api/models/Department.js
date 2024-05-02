const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  specialties: [String],
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;