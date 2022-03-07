const express = require("express");
const { addArt, removeArt, getArtByHabitId } = require("../models/art.models");
const router = express.Router();

//?Figure out if add art should be here or if it only needs to be in habit models

router.delete("/remove/:id", (req, res) => {
    removeArt(res, req.params.id);
});

router.get("/:habit_id", (req, res) => {
    getArtByHabitId(res, req.params.habit_id);
});

module.exports = router;
