const express = require("express");
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const { registerUser, loginUser } = require("../controllers/user-controllers");
const router = express.Router();


router.get("/", (req, res) => {
  res.send("user");
});

router.post("/register", registerUser);

router.post("/login", loginUser);

module.exports = router;
