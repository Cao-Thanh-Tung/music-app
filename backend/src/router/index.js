const express = require("express");
const router = express.Router();
const registerController = require("../controller/RegisterController");
const loginController = require("../controller/LoginController");
const searchController = require("../controller/SearchController");
router.post("/register", registerController.register);
router.post("/login", loginController.login);
router.get("/search", searchController.search);
