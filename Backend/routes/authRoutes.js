const express = require('express');
const router = express.Router(); 
const { registerUser, loginUser, forgotPassword, otpVerify, changePassword } = require("../controllers/authController")
const librarianOnly = require('../middleware/validateLibrarian');

//register user
router.post('/register', registerUser);

//login user
router.post('/login', loginUser);

//forgot password
router.post('/forgot-password', forgotPassword);

//otp verify
router.post('/otp-verify', otpVerify);

//change-password
router.post("/change-password", changePassword);

//dashboard route for librarian only
router.post('/dashboard', librarianOnly, (req, res) => {
    res.status(200).json({ message: "Welcome to the librarian dashboard", user: req.user });
});

module.exports = router;