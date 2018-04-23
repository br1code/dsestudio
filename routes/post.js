const express               = require("express"),
    Post                    = require("../models/post"),
    Category                = require("../models/category"),
    middleware          = require("../extras/middleware");

const router = express.Router();


// NEW - Show form to create new post
router.get("/post/new", middleware.isLoggedIn, (req, res) => {
    // get categories and show form
    Category.find({}, (err, categories) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.send("Unable to fetch categories");
        } else {
            res.render("post/new", {categories});
        }
    });
});

// CREATE - Add new post to DB
router.post("/post", middleware.isLoggedIn, (req, res) => {
    // find category to get fullname
    Category.findOne({name: req.body.post.category}, (err, category) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.redirect("/post/new");
        } else {
            // create new post using data from forms and DB
            let newPost = {
                title: req.body.post.title,
                date: "Just Now",
                body: req.body.post.body,
                category: category.name,
                categoryFull: category.fullname,
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
                    console.log(`Post created: ${post}`);
                    res.redirect("/");
                }
            });
        }
    });
});

// SHOW - Shows more info about one post
router.get("/post/:id", (req, res) => {
    // find post by id, then populate the comments and finally, show it
    res.render("post/show", {post: "insert post data here"});
});


module.exports = router;