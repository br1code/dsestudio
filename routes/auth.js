const express           = require("express"),
    passport            = require("passport"),
    User                = require("../models/user");

const router = express.Router();


// LOG IN - Show form to authenticate
router.get("/login", (req, res) => {
    res.render("auth/login");
});


// LOG IN - Authenticate user using passport
router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}), (req, res) => {
    console.log("User logged in");
});


// SIGN UP - Show form to register new user
router.get("/signup", (req, res) => {
    res.render("auth/signup");
})

// SIGN UP - Register new user using passport
router.post("/signup", (req, res) => {
    let newUser = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(`Error: ${err}`);
            return res.redirect("/signup");
        }
        passport.authenticate("local")(req, res, () => {
            res.redirect("/");
        });
    });
});

// LOG OUT - Log out user using passport
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

module.exports = router;