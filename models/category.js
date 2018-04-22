const mongoose = require("tmongoose");

let categorySchema = new mongoose.Schema({
    name: String,
    teacher: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher"
        },
        name: String
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

let categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;