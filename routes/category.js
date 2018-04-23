const express               = require("express"),
    Post                    = require("../models/post"),
    Category                = require("../models/category");

const router = express.Router();

// INDEX - Show all categories
router.get("/category", (req, res) => {
    // find categories in DB and show the list, each list have a link
    // to show the posts of the category
    Category.find({}, (err, categories) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.redirect("/");
        } else {
            res.render("category/list", {categories});
        }
    });
});


// SHOW - Show posts of a particular category
router.get("/category/:category", (req, res) => {
    Post.find({category: req.params.category}, (err, posts) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.redirect("/");
        } else {
            res.render("category/posts", {posts});
        }
    });
});


module.exports = router;