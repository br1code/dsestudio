const express               = require("express"),
    Post                    = require("../models/post"),
    middleware          = require("../extras/middleware");

const router = express.Router();


// NEW - Show form to create new post
router.get("/post/new", middleware.isLoggedIn, (req, res) => {
    // show form to create new post
    res.render("post/new");
});

// CREATE - Add new post to DB
router.post("/post", middleware.isLoggedIn, (req, res) => {
    // create the new post using data from body parser, then redirect
    let newPost = {
        title: req.body.post.title,
        date: "Just Now",
        body: req.body.post.body,
        author: {
            id: req.user._id,
            name: req.user.name
        }
    };
    Post.create(newPost, (err, post) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.redirect("/");
        } else {
            console.log(`Post created: ${post}`);
            res.redirect("/");
        }
    });
});

// SHOW - Shows more info about one post
router.get("/post/:id", (req, res) => {
    // find post by id, then populate the comments and finally, show it
    res.render("post/show", {post: "insert post data here"});
});


module.exports = router;