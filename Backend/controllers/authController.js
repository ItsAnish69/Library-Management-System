const Controller = require('../services/userServices')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
require("dotenv").config();



//user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role){
        return res.status(500).json("Missing fields! Requires name, email ,password and role");
    }

    // Check for existing user
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    //generate token if user is librarian
    let token = null;
    if (role === "librarian") {
        const token = jwt.sign({ email, role }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
      }

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      ...(role === "librarian" && { token })
    });
    
    await user.save();
    res.status(201).json({ message: "User registered successfully", token });

  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};


// user login
const loginUser = async(req, res) =>{
    try{
    const {email, password} = req.body;

        //find user with the password field
        const user = await User.findOne({email}).select("+password");
        if(!user) return res.status(400).json("User not found");

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(401).json({Message: "Invalid password"});

        //if the user role is librarian, token field is required
        let token;
        if(user.role === "librarian") {
          if(token !== user.token){
            return res.status(403).json({ message: "Token is required for librarian access" });
        }
      }

        res.status(201).json({
            message: "Login Successful",
            user:{
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
        }})
    } catch(err){
        res.status(400).json("Login Failed: " + err.message);
    }
}

module.exports = {
    loginUser,
    registerUser
};