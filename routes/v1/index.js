const { taskController, UserController } = require("../../controllers/index");

const express = require("express");
const router = express.Router();

router.get("/task/:id", taskController.getTask);
router.post("/task", taskController.createTask);
router.patch("/task/:id", taskController.updateTask);
router.delete("/task/:id", taskController.deleteTask);

router.get("/user/:id", UserController.getUser);
router.post("/user", UserController.createUser);
router.patch("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);

module.exports = router;
