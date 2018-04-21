const mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
    body: String,
    date: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        name: String
    }
});

let commentModel = mongoose.model("Comment", commentSchema);

module.exports = commentModel;