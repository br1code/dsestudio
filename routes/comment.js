const express           = require("express"),
    User                = require("../models/user"),
    Comment             = require("../models/comment"),
    Post                = require("../models/post"),
    middleware          = require("../extras/middleware");

const router = express.Router();


// CREATE - Add new comment to the DB
router.post("/post/:id/comment", middleware.isLoggedIn, (req, res) => {
    Post.findById(req.params.id, (err, post) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.send("Unable to find that post");
        } else {
            Comment.create(req.body.comment, (err, comment) => {
                if (err) {
                    console.log(`Error: ${err}`);
                    res.send("Unable to create new comment");
                } else {
                    // add extra data to the new comment
                    comment.author.id = req.user._id;
                    comment.author.name = req.user.username;
                    comment.date = "Just Now";
                    comment.save();
                    // add new comment to the post and save
                    post.comments.push(comment);
                    post.save();
                    console.log(`Comment created successfully: ${comment}`);
                    res.redirect(`/post/${post._id}`);
                }
            });
        }
    });
});

module.exports = router;