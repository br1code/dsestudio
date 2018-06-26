const express               = require("express"),
    moment                  = require("moment"),
    Post                    = require("../models/post"),
    Category                = require("../models/category"),
    middleware              = require("../extras/middleware");

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
                date: moment().calendar(),
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
                    res.redirect("/");
                }
            });
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