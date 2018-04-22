const mongoose      = require("mongoose");

// Check if user is logged in
let isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};


// Provide currentUser to the route
let currentUser = (req, res, next) => {
    res.locals.currentUser = req.user;
    next();
};

module.exports = {
    isLoggedIn,
    currentUser
};