const express           = require("express"),
    passport            = require("passport"),
    User                = require("../models/user");

const router = express.Router();


// Log In -----------------------------------------------------
// just show form
router.get("/login", (req, res) => {
    res.render("auth/login");
});


// add post /login
router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}), (req, res) => {
    console.log("User logged in");
});

// Sign Up -----------------------------------------------------
// just show form
router.get("/signup", (req, res) => {
    res.render("auth/signup");
})

// add post signup
router.post("/signup", (req, res) => {
    let newUser = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email
    });
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(`Error: ${err}`);
            return res.redirect("/signup");
        }
        passport.authenticate("local")(req, res, () => {
            console.log(`User sign up: ${user}`);
            res.redirect("/");
        });
    });
});

// Log Out -----------------------------------------------------
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

module.exports = router;