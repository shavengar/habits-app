const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authentication.middleware");
const {
  addHabit,
  removeHabit,
  markComplete,
  getHabitsByUserId,
} = require("../models/habits.models");

router.put("/add", authenticate, (req, res) => {
  const { user_id, title, completed, due_date } = req.body;
  if (!user_id || !title || !due_date) {
    return res.send({
      data: null,
      success: false,
      error: "Invalid data provided.",
    });
  }
  const habit = { user_id, title, completed, due_date };
  return addHabit(res, habit);
});

router.delete("/remove/:id", authenticate, (req, res) => {
  removeHabit(res, req.params.id, req.user.id);
});

router.patch("/complete/:id", authenticate, (req, res) => {
  markComplete(res, req.params.id);
});

router.get("/:user_id", authenticate, (req, res) => {
  getHabitsByUserId(res, req.params.user_id);
});

module.exports = router;
