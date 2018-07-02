const express               = require("express"),
    moment                  = require("moment"),
    Post                    = require("../models/post"),
    middleware              = require("../extras/middleware"),
    categoryData            = require("../extras/categoryData");

const router = express.Router();


// NEW - Show form to create new post
router.get("/post/new", middleware.isLoggedIn, (req, res) => {
    res.render("post/new");
});


// CREATE - Add new post to DB
router.post("/post", middleware.isLoggedIn, (req, res) => {
    // validate category
    if (!categoryData[req.body.post.category]) {
        return res.redirect("/");
    }
    let newPost = {
        title: req.body.post.title,
        date: moment().calendar(),
        body: req.body.post.body,
        category: req.body.post.category,
        categoryFull: categoryData[req.body.post.category],
        author: {
            id: req.user._id,
            name: req.user.name
        }
    };
    // save new post
    Post.create(newPost, (err, post) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.redirect("/");
        } else {
            res.redirect("/");
        }
    });
});

// SHOW - Shows more info about one post
router.get("/post/:id", (req, res) => {
    // find post by id, then populate the comments and finally, show it
    Post.findById(req.params.id).
    populate("comments").
    exec((err, post) => {
        if (err || !post) {
            console.log(`Error: ${err}`);
            res.redirect("/");
        } else {
            res.render("post/show", {post});
        }
    });
});


module.exports = router;