// routes/user.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

// Register
router.post('/register', userController.registerUser);

// Login
router.post('/login', userController.loginUser);

// Get the current user's information
router.get('/me', auth, userController.getCurrentUser);

module.exports = router;
