const express = require("express");

const router = express.Router();

router.get("/materias", (req, res) => {
    res.render("materias/index");
});

module.exports = router;