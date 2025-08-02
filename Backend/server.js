const express = require("express");
const mongoose = require("mongoose")
require('dotenv').config();
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
const UserRoutes = require('./routes/userRoutes');

app.use('/api/user',UserRoutes);
app.use('/api/book', BookRoutes);

//server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("connected to server"));