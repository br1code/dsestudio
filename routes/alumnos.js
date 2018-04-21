const express = require("express");

const router = express.Router();

router.get("/alumnos", (req, res) => {
    res.render("alumnos/index");
});

module.exports = router;