const express = require("express");
const mongoose = require("mongoose")
require('dotenv').config();
require("jsonwebtoken")
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/test")
.then(() => {
    console.log("Connected to the mongoDB")
})
.catch((err) => {
    console.log(err);
});

const BookRoutes = require('./routes/bookRoutes');
const BorrowRoutes = require('./routes/borrowRoutes');
const UserRoutes = require('./routes/userRoutes');
const AuthRoutes = require('./routes/authRoutes');

app.use('/api/user',UserRoutes);
app.use('/api/borrow', BorrowRoutes);
app.use('/api/book', BookRoutes);
app.use('/api/auth', AuthRoutes);

//server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("connected to server"));