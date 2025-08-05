const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {type: String,},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true, select: false},
    role: {type: String, default: "borrower", enum:["borrower", "librarian"]},
    token: {type: String, select: false},
});
module.exports = mongoose.model("User", user);