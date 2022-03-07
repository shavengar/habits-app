const express = require("express");
const validate = require("../middleware/validate.middleware");
const { login, signup } = require("../models/auth.models");
const router = express.Router();

router.post("/login", validate, (req, res) => {
    login(res, req.body.username, req.body.password);
});

router.put("/signup", validate, (res, req) => {
    signup(res, req.body.username, req.body.password);
});

module.exports = router;
