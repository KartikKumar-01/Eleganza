const productModel = require("../models/product-model");

const showProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res.render("products", {
      success: req.flash("success"),
      error: req.flash("error"),
      products
    });
  } catch (err) {
    console.error(err);
    req.flash("error", "Failed to load products");
    return res.redirect("/");
  }
};


module.exports = {showProduct};