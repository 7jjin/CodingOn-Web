const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/todos", controller.get_todo);
router.post("/todo", controller.post_todo);
router.patch("/todo/:todoId", controller.patch_todo);
router.delete("/todo/:todoId", controller.delete_todo);

module.exports = router;
