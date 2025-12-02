const productModel = require("../models/product-model");

const createProduct = async (req, res) => {
  try {
    const { name, price, discount, panelColor, footerColor, fontColor } = req.body;
    let product = await productModel.create({
      image: req.file.buffer,
      name,
      price,
      discount,
      panelColor,
      footerColor,
      fontColor
    });
    req.flash("success", "Product created successfully.");
    res.redirect("/admin");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createProduct };
