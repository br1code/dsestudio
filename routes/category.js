const express               = require("express"),
    Post                    = require("../models/post"),
    Category                = require("../models/category");

const router = express.Router();


// SHOW - Show posts and full info of a particular category
router.get("/category/:category", (req, res) => {
    Category.findOne({
        name: req.params.category
    }, (err, category) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.redirect("/");
        } else {
            Post.find({category: req.params.category}, (err, posts) => {
                if (err) {
                    console.log(`Error: ${err}`);
                    res.redirect("/");
                } else {
                    res.render("category/full", {
                        posts,
                        categoryFull: category.fullname
                    });
                }
            });
        }
    });
});


module.exports = router;