const { TaskRepository } = require("../repository/index");

class TaskService {
  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async getTask(taskId, userId) {
    try {
      const task = await this.taskRepository.getTask(taskId, userId);
      return task;
    } catch (err) {
      console.log("Something went wrong on service layer");
      throw err;
    }
  }

  async getAllTasks(userId) {
    try {
      const tasks = await this.taskRepository.getAllTasks(userId);
      return tasks;
    }
    catch (err) {
      console.log("Someting went wrong on service layer");
      throw err;
    }
  }

  async createTask(data, userId) {
    try {
      const task = await this.taskRepository.createTask(data, userId);
      return task;
    } catch (err) {
      console.log("Something went wrong on service layer");
      throw err;
    }
  }

  async updateTask(taskId, data, userId) {
    try {
      const updatedTask = await this.taskRepository.updateTask(taskId, data, userId);
      return updatedTask;
    } catch (err) {
      console.log("Something went wrong on service layer");
      throw err;
    }
  }

  async deleteTask(taskId, userId) {
    try {
      const response = await this.taskRepository.deleteTask(taskId, userId);
      return response;
    } catch (err) {
      console.log("Something went wrong on service layer");
      throw err;
    }
  }
}

module.exports = TaskService;
