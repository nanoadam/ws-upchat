const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// @route     POST api/auth/
// @desc      Check auth of User
// @access    Public
exports.checkAuth = (req, res) => {
  res.send("Checking auth of user");
};

// @route     POST api/auth/login
// @desc      Login a user
// @access    Public
exports.loginUser = (req, res, next) => {
  const { email, password } = req;
};

// @route     POST api/auth/register
// @desc      Register a user
// @access    Public
exports.registerUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let user = await User.create({
      email,
      password,
    });

    let token = await generateToken(user);

    await res.json({
      success: true,
      msg: `User ${email} with id of ${user._id} has been created.`,
      token,
    });
  } catch (err) {
    next(err);
  }
};
