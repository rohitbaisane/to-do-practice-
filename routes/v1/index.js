const { taskController } = require("../../controllers/index");

const express = require("express");
const router = express.Router();

router.get("/task/:id", taskController.getTask);
router.post("/task", taskController.createTask);

module.exports = router;
