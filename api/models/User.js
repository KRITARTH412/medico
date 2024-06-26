const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username:String,
  email: String,
  password: String,
  verificationToken: String,
  resetToken: String,
  resetTokenExpiry: Date,
});

const User = mongoose.model('User', userSchema);

module.exports = User;