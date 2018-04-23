const mongoose = require("mongoose");

let categorySchema = new mongoose.Schema({
    name: String,
    fullname: String
    // teacher: {
    //     id: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Teacher"
    //     },
    //     name: String
    // },
});

let categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;