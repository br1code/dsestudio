const express               = require("express"),
    Post                    = require("../models/post"),
    Category                = require("../models/category");

const router = express.Router();

router.get("/", (req, res) => {
    // show all posts
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