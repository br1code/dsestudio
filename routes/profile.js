const express               = require("express"),
    User                    = require("../models/user"),
    middleware              = require("../extras/middleware");

const router = express.Router();

// INDEX - Show all users
router.get("/profile", (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.redirect("/");
        } else {
            res.render("profile/list", {users});
        }
    });
});


// SHOW - Shows more info about one user
router.get("/profile/:id", (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.redirect("/");
        } else {
            res.render("profile/show", {user});
        }
    });
});

module.exports = router;