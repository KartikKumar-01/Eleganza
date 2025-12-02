const { productValidation } = require("../utils/product-validator");

module.exports = (req, res, next) => {
  const bodyData = {
    name: req.body.name,
    price: req.body.price,
    discount: req.body.discount,
  };

  const { error } = productValidation.validate(bodyData);

  if (error) {
    req.flash("error", "Invalid product data");
    return res.redirect('/admin/product/create');
  }

  if (!req.file) {
    req.flash("error", "Product image is required.");
    return res.redirect('/admin/product/create');
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];

  if (!allowedTypes.includes(req.file.mimetype)) {
    req.flash("error", "Only JPG, PNG, or WEBP image formats are allowed");
    return res.redirect('/admin/product/create');
  }

  next();
};
