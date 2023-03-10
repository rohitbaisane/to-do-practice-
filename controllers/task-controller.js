const { TaskService } = require("../services/index");
const taskService = new TaskService();

const getTask = async (req, res) => {
  try {
    const task = await taskService.getTask(req.params.id, req.user.id);
    return res.status(200).json({
      success: true,
      data: task,
      message: "Successfully fetched a task",
      error: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      data: {},
      message: "Interal server error",
      error: err,
    });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks(req.user.id);
    return res.status(200).json({
      success: true,
      data: tasks,
      message: "Successfully fetchd all tasks",
      error: {}
    });
  }
  catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      data: {},
      message: "Internal server error",
      error: err
    })
  }
}
const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body, req.user.id);
    return res.status(200).json({
      success: true,
      data: task,
      message: "Successfully created a task",
      error: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      data: {},
      message: "Internal server error",
      error: err,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = await taskService.updateTask(req.params.id, req.body, req.user.id);
    return res.status(201).json({
      success: true,
      data: updatedTask,
      message: "Successfully updated a task",
      error: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      data: {},
      message: "Internal server error",
      error: err,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const response = await taskService.deleteTask(req.params.id, req.user.id);
    return res.status(200).json({
      success: true,
      data: response,
      message: "Successfully deleted a task",
      error: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      data: {},
      message: "Internal server error",
      error: err,
    });
  }
};

module.exports = {
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getAllTasks
};
