const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    email: String
});

userSchema.plugin(passportLocalMongoose);

let userModel = mongoose.model("User", userSchema);

module.exports = userModel;