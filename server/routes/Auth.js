const express = require("express");
const { checkAuth, loginUser, registerUser } = require("../controllers/Auth");
const router = express.Router();

router.get("/", checkAuth);
router.post("/login", loginUser);
router.post("/register", registerUser);
