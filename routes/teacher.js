const express               = require("express"),
    Teacher                 = require("../models/teacher");

const router = express.Router();


// INDEX - Show all teachers
router.get("/teacher", (req, res) => {
    // find all teachers and show a list
    Teacher.find({}, (rerr, teachers) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.send("Unable to fetch teachers");
        } else {
            res.render("teacher/list", {teachers});
        }
    });
});

// SHOW - Show more info about one teacher
router.get("/teacher/:name", (req, res) => {
    Teacher.findOne({name: req.params.name}, (err, teacher) => {
        if (err) {
            console.log(`Error: ${err}`);
            res.send("Unable to show the teacher");
        } else {
            res.render("teacher/show", {teacher});
        }
    });
});

module.exports = router;