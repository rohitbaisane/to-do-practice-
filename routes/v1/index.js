const { taskController, UserController } = require("../../controllers/index");

const { UserRequestMiddleware, validateTaskInsertion } = require("../../middlewares/index");
const { validateAuth, authenticateUser } = UserRequestMiddleware;

const express = require("express");
const router = express.Router();

router.get("/task/:id", authenticateUser, taskController.getTask);
router.post("/task", authenticateUser, validateTaskInsertion, taskController.createTask);
router.patch("/task/:id", authenticateUser, taskController.updateTask);
router.delete("/task/:id", authenticateUser, taskController.deleteTask);
router.get("/task", authenticateUser, taskController.getAllTasks);

router.get("/user/me", authenticateUser, UserController.getUser);
router.post("/user", validateAuth, UserController.createUser);
router.patch("/user/me", authenticateUser, UserController.updateUser);
router.delete("/user/me", authenticateUser, UserController.deleteUser);
router.post("/signIn", UserController.signIn);

module.exports = router;
