const express = require("express");
const { removeArt, getArtByHabitId } = require("../models/art.models");
const router = express.Router();

router.delete("/remove/:id", (req, res) => {
    removeArt(res, req.params.id);
});

router.get("/:habit_id", (req, res) => {
    getArtByHabitId(res, req.params.habit_id);
});

module.exports = router;
