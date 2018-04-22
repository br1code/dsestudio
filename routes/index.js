const express               = require("express"),
    Post                    = require("../models/post");

const router = express.Router();

router.get("/", (req, res) => {
    // show all posts and the other things too
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