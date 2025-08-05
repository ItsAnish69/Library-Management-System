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

    // Check for user in DB
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });
    
    await user.save();
    res.status(200).json({
            message: "Registration Successfull",
            user:{
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
    }})

  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};


// user login
const loginUser = async(req, res) =>{
    try{
    const {email, password} = req.body;

        if (!email || !password){
        return res.status(500).json("Missing fields! Requires email and password");
    }

        //find user in the DB
        const user = await User.findOne({email}).select("+password");
        if(!user) return res.status(400).json("User not found");

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(401).json({Message: "Invalid password"});

        //create a JWT token
        const token = jwt.sign(
            {id: user._id, 
            email: user.email,
            role: user.role
          },
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN || "3d"}
        );

        res.status(200).json({
            message: "Login Successful",
            token,
            user:{
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
        }})
    } catch(err){
        res.status(500).json("Login Failed: " + err.message);
    }
}

module.exports = {
    loginUser,
    registerUser
};