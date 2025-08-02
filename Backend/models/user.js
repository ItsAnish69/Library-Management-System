const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {type: String,},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true, select: false},
    role: {type: String, default: "borrower", enum:["borrower", "librarian"]},
    token: {type: String, enum: ["librarian"], select: false} // This field is optional and only used for librarian access
});
module.exports = mongoose.model("User", user);