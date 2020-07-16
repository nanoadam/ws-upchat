const express = require("express");
const { checkAuth, loginUser, registerUser } = require("../controllers/Auth");
const router = express.Router();
const { hashPassword } = require("../middleware/hashPassword");
const { auth } = require("../middleware/auth");

router.get("/", auth, checkAuth);
router.post("/login", loginUser);
router.post("/register", hashPassword, registerUser);

module.exports = router;
