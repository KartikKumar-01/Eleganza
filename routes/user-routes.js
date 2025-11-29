const express = require("express");
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const { registerUser, loginUser, logoutUser } = require("../controllers/auth-controllers");
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn')


router.get("/", (req, res) => {
  res.send("user");
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", isLoggedIn, logoutUser)

module.exports = router;
