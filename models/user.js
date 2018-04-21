const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    email: String,
    phone: String,
    photo: String
});

let userModel = mongoose.model("User", userSchema);

module.exports = userModel;