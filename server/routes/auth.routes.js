const express = require("express");
const validate = require("../middleware/validate.middleware");
const authenticate = require("../middleware/authentication.middleware");
const { login, signup } = require("../models/auth.models");
const router = express.Router();

router.get("/verify", authenticate, (req, res) => {
  return res.send({
    data: { username: req.user, username },
    success: true,
    error: null,
  });
});

router.post("/login", validate, (req, res) => {
  login(res, req.body.username, req.body.password);
});

router.put("/register", validate, (req, res) => {
  signup(res, req.body.username, req.body.password);
});

router.get("/logout", (req, res) => {
  res.clearCookie("acess_token");
  return res.send({
    data: null,
    success: true,
    error: null,
  });
});

module.exports = router;
