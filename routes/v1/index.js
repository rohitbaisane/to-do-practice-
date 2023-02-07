const { taskController, UserController } = require("../../controllers/index");
const { authenticateUser } = require("../../middlewares/index");

const express = require("express");
const router = express.Router();

router.get("/task/:id", authenticateUser, taskController.getTask);
router.post("/task", authenticateUser, taskController.createTask);
router.patch("/task/:id", authenticateUser, taskController.updateTask);
router.delete("/task/:id", authenticateUser, taskController.deleteTask);
router.get("/task", authenticateUser, taskController.getAllTasks);

router.get("/user/:id", authenticateUser, UserController.getUser);
router.post("/user", UserController.createUser);
router.patch("/user/:id", authenticateUser, UserController.updateUser);
router.delete("/user/:id", authenticateUser, UserController.deleteUser);
router.post("/signIn", UserController.signIn);

module.exports = router;
