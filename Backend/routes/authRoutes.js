const express = require('express');
const router = express.Router(); 
const { registerUser, loginUser } = require("../controllers/authController")
const { validate } = require("../models/user");
const librarianOnly = require('../middleware/validateLibrarian');

//register user
router.post('/register', registerUser)
//login user
router.post('/:id/login', loginUser)

//dashboard route for librarian only
router.post('/dashboard', librarianOnly, (req, res) => {
    res.status(200).json({ message: "Welcome to the librarian dashboard", user: req.user });
}
);
module.exports = router;