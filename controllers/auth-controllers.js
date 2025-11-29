const userModel = require("../models/user-model");
const { generateToken } = require("../utils/generate-token");
const { userSchema, loginSchema } = require("../utils/user-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    const { fullname, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      req.flash("error", "You already have an account. Please")
      return res.redirect('/');
    }

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          return res.status(501).json({
            success: false,
            message: "Encryption error",
          });
        }
        const newUser = await userModel.create({
          fullname,
          email,
          password: hash,
        });

        let token = generateToken(newUser);
        res.cookie("token", token);
        req.flash("success", "Account created successfully.")
        return res.redirect("/products");
      });
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }
    const { email, password } = req.body;

    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email or password incorrect",
      });
    }

    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Email or password incorrect",
      });
    }

    let token = generateToken(user);
    res.cookie("token", token);

    return res.redirect("/products");

  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token")
    res.redirect('/').json({
      succes: true
    })

  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = { registerUser, loginUser, logoutUser };
