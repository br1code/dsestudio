const express = require("express");

const router = express.Router();


// Log In -----------------------------------------------------
// just show form
router.get("/login", (req, res) => {
    res.render("auth/login");
});


// add post /login


// Sign Up -----------------------------------------------------
// just show form
router.get("/signup", (req, res) => {
    res.render("auth/signup");
})

// add post signup


// Log Out -----------------------------------------------------
router.get("/logout", (req, res) => {
    // log out
    res.redirect("/");
});

module.exports = router;