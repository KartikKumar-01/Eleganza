const express = require("express");
const router = express.Router();
const adminModel = require("../models/admin-model");
const { createProduct } = require("../controllers/admin-controller");
const { upload } = require("../config/multer-config");
const validateProduct = require("../middlewares/validateProduct");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let existingAdmin = await adminModel.find();
    if (existingAdmin.length > 0) {
      return res
        .status(504)
        .send("You don't have permission to create new admin");
    }

    const { fullname, email, password } = req.body;
    const admin = await adminModel.create({
      fullname,
      email,
      password,
    });
    res.send(admin);
  });
}

router.get("/", (req, res) => {
  res.render("adminPanel", {
    success: req.flash("success"),
    error: req.flash("error"),
  });
});

router.get("/product/create", (req, res) => {
  res.render("createProducts", {
    success: req.flash("success"),
    error: req.flash("error"),
  });
});

router.post("/product/create", upload.single('image'), validateProduct, createProduct)

module.exports = router;
