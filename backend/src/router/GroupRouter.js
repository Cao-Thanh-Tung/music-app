const express = require("express");
const groupController = require("../controller/GroupController");
const router = express.Router();
router.post("/create", groupController.createGroup);
router.post("/joinrequest", groupController.joinRequest);
router.get("/info", groupController.getInfo);
router.post("/outgroup", groupController.outGroup);
// Group leader
router.delete("/detelegroup", groupController.delete);
router.post("/joinreponse", groupController.joinReponse);
router.post("/kick", groupController.kick);
router.post("/rent", groupController.rent);
module.exports = router;
