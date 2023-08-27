const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
router.get("/Getinfo", controller.getinfo);

router.get("/addinfo", controller.addinfo);
router.post("/addinfo", controller.postinfo);

module.exports = router;
