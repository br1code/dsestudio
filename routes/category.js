const express = require("express");

const router = express.Router();

// INDEX - Show all categories
router.get("/category", (req, res) => {
    // find categories in DB and show the list, each list have a link
    // to show the posts of the category
    res.render("category/list", {categories: "insert list of categories"});
});


// SHOW - Show posts of a particular category
router.get("/category/:category", (req, res) => {
    // find posts filtering with req.params.category and render index with the posts
    // if category === "all", show all posts
    // else show only the posts of that category
    res.render("category/posts", {posts: "insert filtered posts here"});
});


module.exports = router;