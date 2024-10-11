const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// User registration route
router.post('/register', authController.registerUser);

// User login route
router.post('/login', authController.loginUser);

// User profile route (protected)
router.get('/profile', authController.protect, authController.getUserProfile);

module.exports = router;