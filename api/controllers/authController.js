const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/User');
const crypto = require('crypto');

async function signUp(req, res) {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '10h' });
    const user = new User({
      username,
      email,
      password: hashedPassword,
      verificationToken,
      resetToken: null,
      resetTokenExpiry: null,
    });

    // Save the user to the database
    await user.save();

    // Send verification email
    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({ message: 'User created successfully. Please check your email for verification.' });
  } catch (error) {
    console.error('Error in signUp:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function sendVerificationEmail(email, token) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: true,
    logger: true,
    debug: true,
    secureConnetion: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnAuthorized: false
    }
  });

  const verificationLink = `http://localhost:3003/api/auth/verify/${token}`; // Replace with your verification link
  const mailOptions = {
    from: 'salluk412184@gmail.com', // Replace with your email
    to: email,
    subject: 'Email Verification',
    text: `Click on the following link to verify your email: ${verificationLink}`,
  };
  await transporter.sendMail(mailOptions);
}

async function verifyEmail(req, res) {
  const { token } = req.params;
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = decodedToken;

    const user = await User.findOne({ email, verificationToken: token });

    if (!user) {
      return res.status(401).json({ error: 'Invalid verification token' });
    }

    // Update user's verification status
    user.isVerified = true;

    // Save the user with updated verification status
    await user.save();

    // Set verificationToken to null after successful save
    user.verificationToken = null;
    await user.save();

    res.json({ message: 'Email verification successful. You can now log in.' });
  } catch (error) {
    console.error('Error in verifyEmail:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function signIn(req, res) {
  try {
    const { email, password } = req.body;
    console.log('Received credentials:', email, password);

    const user = await User.findOne({ email });
    console.log('Fetched user from database:', user);

    if (!user) {
      console.log('User not found');
      return res.status(401).json({ error: 'Invalid email  or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Password comparison result:', isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email  or password' });
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '10h' });
    res.json({ token });
  } catch (error) {
    console.error('Error in signIn:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function forgotPassword(req, res) {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // Token valid for 1 hour

    // Update user's resetToken and resetTokenExpiry
    user.resetToken = resetToken;
    user.resetTokenExpiry = resetTokenExpiry;
    await user.save();

    // Send reset email
    await sendResetEmail(email, resetToken);

    res.json({ message: 'Password reset instructions sent to your email.' });
  } catch (error) {
    console.error('Error in forgotPassword:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function sendResetEmail(email, resetToken) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: true,
      logger: true,
      debug: true,
      secureConnetion: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnAuthorized: false
      }
    });

    const resetLink = `http://localhost:3003/api/auth/reset-password/${resetToken}`; // Replace with your reset password link
    const mailOptions = {
      from: 'salluk412184@gmail.com', // Replace with your email
      to: email,
      subject: 'Password Reset',
      text: `Click on the following link to reset your password: ${resetLink}`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Reset email sent to ${email}`);
  } catch (error) {
    console.error('Error in sendResetEmail:', error);
    throw new Error('Error sending reset email');
  }
}

async function resetPassword(req, res) {
  const { token } = req.params;
  const { password, confirmPassword } = req.body;
  try {
    // Validate password and confirmPassword
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const user = await User.findOne({ resetToken: token, resetTokenExpiry: { $gt: Date.now() } });

    if (!user) {
      return res.status(401).json({ error: 'Invalid or expired reset token' });
    }

    // Update user's password
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetToken = null;
    user.resetTokenExpiry = null;
    await user.save();

    res.json({ message: 'Password reset successful. You can now log in with your new password.' });
  } catch (error) {
    console.error('Error in resetPassword:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { signUp, signIn, verifyEmail, resetPassword, forgotPassword };