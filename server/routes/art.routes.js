const express = require("express");
const { removeArt, getArtByHabitId } = require("../models/art.models");
const authenticate = require("../middleware/authentication.middleware");
const router = express.Router();

router.delete("/remove/:id", authenticate, (req, res) => {
  removeArt(res, req.params.id);
});

<<<<<<< Updated upstream
router.post("/", (req, res) => {
    getArtByHabitId(res, req.body);
=======
router.get("/:habit_id", authenticate, (req, res) => {
  getArtByHabitId(res, req.params.habit_id);
>>>>>>> Stashed changes
});

module.exports = router;
