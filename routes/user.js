const express               = require("express"),
    User                    = require("../models/user"),
    middleware              = require("../extras/middleware");

const router = express.Router();

// SHOW - Shows more info about the current user
// ADD MIDDLEWARE TO CHECK USER
router.get("/user", middleware.isLoggedIn, (req, res) => {
    User.findById(req.user._id, (err, user) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.redirect("/");
        } else {
            res.render("user/show", {user});
        }
    });
});


// EDIT - Show form to edit profile
// ADD MIDDLEWARE TO CHECK USER
router.get("/user/edit", middleware.isLoggedIn, (req, res) => {
    User.findById(req.user._id, (err, user) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.redirect("/");
        } else {
            res.render("user/edit", {user});
        }
    });
});

// UPDATE - Update profile
// ADD MIDDLEWARE TO CHECK USER
router.put("/user", middleware.isLoggedIn, (req, res) => {
    let userEdit = {
        username: req.body.username,
        email: req.body.email,
        name: req.body.name
    };
    User.findByIdAndUpdate(req.user._id, userEdit, 
        (err, user) => {
            if (err || !user) {
                console.log(`Error: ${err}`);
                res.redirect("/");
            } else {
                res.redirect("/user");
            }
    });
});

module.exports = router;