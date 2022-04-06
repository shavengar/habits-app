const express = require("express");
const { removeArt, getArtByHabitId } = require("../models/art.models");
const authenticate = require("../middleware/authentication.middleware");
const router = express.Router();

router.delete("/remove/:id", authenticate, (req, res) => {
  removeArt(res, req.params.id);
});

router.get("/:habit_id", authenticate, (req, res) => {
  getArtByHabitId(res, req.params.habit_id);
});

module.exports = router;
