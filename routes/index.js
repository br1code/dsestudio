const express               = require("express"),
    Post                    = require("../models/post"),
    Category                = require("../models/category");

const router = express.Router();

// INDEX - Show all posts
router.get("/", (req, res) => {
    Post.find({}, (err, posts) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.send("Unable to show posts");
        } else {
            Category.find({}, (err, categories) => {
                if (err) {
                    console.log(`Error: ${err}`);
                    res.send("Unable to show categories");
                } else {
                    res.render("index", {
                        posts,
                        categories
                    });
                }
            });
        }
    });
});


module.exports = router;