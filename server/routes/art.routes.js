const express = require("express");
const { removeArt, getArtByUserId } = require("../models/art.models");
const authenticate = require("../middleware/authentication.middleware");
const router = express.Router();

router.delete("/remove/:id", authenticate, (req, res) => {
  removeArt(res, req.params.id);
});

router.get("/:user_id", authenticate, (req, res) => {
  getArtByUserId(res, req.params.user_id);
});

module.exports = router;
