const { TaskRepository } = require("../repository/index");

class TaskService {
  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async getTask(taskId) {
    try {
      const task = await this.taskRepository.getTask(taskId);
      return task;
    } catch (err) {
      console.log("Something went wrong on service layer");
      throw err;
    }
  }

  async createTask(data) {
    try {
      const task = await this.taskRepository.createTask(data);
      return task;
    } catch (err) {
      console.log("Something went wrong on service layer");
      throw err;
    }
  }

  async updateTask(taskId, data) {
    try {
      const updatedTask = await this.taskRepository.updateTask(taskId, data);
      return updatedTask;
    } catch (err) {
      console.log("Something went wrong on service layer");
      throw err;
    }
  }

  async deleteTask(taskId) {
    try {
      const response = await this.taskRepository.deleteTask(taskId);
      return response;
    } catch (err) {
      console.log("Something went wrong on service layer");
      throw err;
    }
  }
}

module.exports = TaskService;
