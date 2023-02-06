const { Task } = require("../models/index");

class TaskRepository {
  async createTask({ description, userId }) {
    try {
      const task = await Task.create({
        description,
        userId,
      });
      return task;
    } catch (err) {
      console.log("Something went wrong on repository layer");
      throw err;
    }
  }

  async getTask(taskId) {
    try {
      const task = await Task.findByPk(taskId);
      return task;
    } catch (err) {
      console.log("Something went wrong on repository layer");
      throw err;
    }
  }
}

module.exports = TaskRepository;