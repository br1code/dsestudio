const mongoose      = require("mongoose");
const categories = require("./categoryData");

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

let categoryData = (req, res, next) => {
    res.locals.categories = categories;
    next();
}

module.exports = {
    isLoggedIn,
    currentUser,
    categoryData
};