const express = require("express");
const { removeArt, getArtByHabitId } = require("../models/art.models");
const router = express.Router();

router.delete("/remove/:id", (req, res) => {
    removeArt(res, req.params.id);
});

router.post("/", (req, res) => {
    getArtByHabitId(res, req.body);
});

module.exports = router;
