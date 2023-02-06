const { TaskRepository } = require("../repository/index");

class TaskService {
  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async getTask(taskId) {
    const task = await this.taskRepository.getTask(taskId);
  }

  async createTask(data) {
    const task = await this.taskRepository.createTask(data);
    return task;
  }
}

module.exports = TaskService;
