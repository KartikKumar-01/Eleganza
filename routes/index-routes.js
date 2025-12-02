const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn')

router.get("/", (req, res) => {
  res.render("index", {
    success: req.flash("success"),
    error: req.flash("error"),
  });
});

module.exports = router