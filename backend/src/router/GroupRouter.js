const express = require("express");
const groupController = require("../controller/GroupController");
const router = express.Router();
router.post("/create", groupController.createGroup);
router.post("/joinrequest", groupController.joinRequest);
router.get("/info", groupController.getGroupInfo);
router.post("/outgroup", groupController.outGroup);
// Group leader
router.delete("/detelegroup", groupController.deleteGroup);
router.post("/joinreponse", groupController.joinResponse);
router.post("/kick", groupController.kickMember);
router.post("/rent", groupController.rentRequest);
module.exports = router;
