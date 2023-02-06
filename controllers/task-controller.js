const { TaskService } = require("../services/index");
const taskService = new TaskService();

const getTask = async (req, res) => {
  try {
    const task = await taskService.getTask(req.params.id);
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

const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
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

module.exports = {
  getTask,
  createTask,
};
