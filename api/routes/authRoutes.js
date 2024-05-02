const express = require('express');
const { signUp, signIn, verifyEmail, resetPassword, forgotPassword } = require('../controllers/authController');
const { authenticateToken } = require('../middlewares/authMiddleware');

const router = express.Router();

// Public routes
router.post('/signup', signUp);
router.post('/signin', signIn);

// Protected route requiring authentication
router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route', user: req.user });
});

// Route for handling email verification
router.get('/verify/:token', verifyEmail);
router.post('/forgot-password', forgotPassword);
router.get('/reset-password/:token', resetPassword);


module.exports = router;
