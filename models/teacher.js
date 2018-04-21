const mongoose = require("mongoose");

let teacherSchema = new mongoose.Schema({
    name: String,
    email: String,
    category: String
});

let teacherModel = mongoose.model("Teacher", teacherSchema);

module.exports = teacherModel;