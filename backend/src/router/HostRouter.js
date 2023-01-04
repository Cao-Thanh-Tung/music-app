const express = require("express");
const hostController = require("../controller/HostController");
const router = express.Router();
router.post("/postroom", hostController.postRoom);
router.put("/updateroom", hostController.updateRoom);
router.delete("/deleteroom", hostController.deleteRoom);
router.post("/release", hostController.rentResponse);
module.exports = router;
