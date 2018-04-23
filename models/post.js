const mongoose = require("mongoose");

let postSchema = new mongoose.Schema({
    title: String,
    date: String,
    body: String,
    category: String,
    categoryFull: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        name: String
    }
    // comments: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Comment"
    //     }
    // ]
});

let postModel = mongoose.model("Post", postSchema);

module.exports = postModel;