const jwt = require("jsonwebtoken");
const config = require("config");

exports.auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token)
    return res.json({ success: false, msg: "Please provide a token" });

  try {
    const decoded = jwt.verify(token, config.get("JWT_SECRET"));

    req.user = decoded;
    next();
  } catch (err) {
    next(err);
  }
};
