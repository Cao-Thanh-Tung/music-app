const express = require("express");
const router = express.Router();
const registerController = require("../controller/RegisterController");
const loginController = require("../controller/LoginController");
router.post("/register", registerController.register);
router.post("/login", loginController);
