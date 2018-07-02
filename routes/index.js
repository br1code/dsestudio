const express               = require("express"),
    Post                    = require("../models/post");

const router = express.Router();

// INDEX - Show all posts
router.get("/", (req, res) => {
    Post.find({}, (err, posts) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.send("Unable to show posts");
        } else {
            res.render("index", {posts});
        }
    });
});


module.exports = router;