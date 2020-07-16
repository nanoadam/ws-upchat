const express = require("express");
const { checkAuth, loginUser, registerUser } = require("../controllers/Auth");
const router = express.Router();
const { hashPassword } = require("../middleware/hashPassword");

router.get("/", checkAuth);
router.post("/login", loginUser);
router.post("/register", hashPassword, registerUser);

module.exports = router;
