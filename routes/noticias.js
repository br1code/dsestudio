const express = require("express");

const router = express.Router();

router.get("/noticias", (req, res) => {
    res.render("noticias/index");
});

module.exports = router;