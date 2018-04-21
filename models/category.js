const mongoose = require("mongoose");

let categorySchema = new mongoose.Schema({
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

let categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;