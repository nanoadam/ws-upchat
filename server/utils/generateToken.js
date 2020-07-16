const generateToken = async (user) => {
  const jwt = require("jsonwebtoken");
  const config = require("config");

  let payload = { id: user._id };

  let token = await jwt.sign(payload, config.get("JWT_SECRET"));

  return await token;
};

module.exports = generateToken;
