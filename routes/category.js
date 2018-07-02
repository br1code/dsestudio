const express               = require("express"),
    Post                    = require("../models/post"),
    categoryData            = require("../extras/categoryData");

const router = express.Router();


// SHOW - Show posts and full info of a particular category
router.get("/category/:category", (req, res) => {
    if (!categoryData[req.params.category]) {
        return res.redirect("/");
    }
    Post.find({category: req.params.category}, (err, posts) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.redirect("/");
        } else {
            res.render("category/full", {
                posts,
                category: categoryData[req.params.category]
            });
        }
    });
});


module.exports = router;