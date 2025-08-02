const express = require('express');
const router = express.Router(); 
const { registerUser, loginUser } = require("../controllers/authController")
const { validate } = require("../models/user")

//register user
router.post('/register', validate, registerUser)
//login user
router.post('/:id/login', loginUser)