const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {type: String,},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true, select: false},
    role: {type: String, default: "Borrower", enum:["Borrower", "librarian"]}
});
module.exports = mongoose.model("User", user);