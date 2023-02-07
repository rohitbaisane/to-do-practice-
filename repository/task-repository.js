const { Task } = require("../models/index");

class TaskRepository {
  updateTaskFields(task, data) {
    if (data.description) {
      task.description = data.description;
    }
    return task;
  }
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

  async getAllTasks() {
    try {
      const tasks = await Task.findAll();
      return tasks;
    }
    catch (err) {
      console.log("Something went wrong on repository layer");
      throw err;
    }
  }
  async updateTask(taskId, data) {
    try {
      const task = await Task.findByPk(taskId);
      const updatedTask = this.updateTaskFields(task, data);
      await updatedTask.save();
      return updatedTask;
    } catch (err) {
      console.log("Something went wrong on repository layer");
      throw err;
    }
  }

  async deleteTask(taskId) {
    try {
      await Task.destroy({
        where: {
          id: taskId,
        },
      });
      return true;
    } catch (err) {
      console.log("Something went wrong on repository layer");
      throw err;
    }
  }
}

module.exports = TaskRepository;
