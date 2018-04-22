const express = require("express");

const router = express.Router();


// INDEX - Show all teachers
router.get("/teacher", (req, res) => {
    // find all teachers and show a list
    res.render("teacher/list", {teachers: "insert teacher list here"});
});

// SHOW - Show more info about one teacher
router.get("/teacher/:id", (req, res) => {
    // find teacher by id and show the full info
    res.render("teacher/show", {teacher: "insert teacher info here"});
});

module.exports = router;