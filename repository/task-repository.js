const { Task } = require("../models/index");

class TaskRepository {
  updateTaskFields(task, data) {
    if (data.description) {
      task.description = data.description;
    }
    return task;
  }
  async createTask({ description }, userId) {
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

  async getTask(taskId, userId) {
    try {
      const task = await Task.findOne({
        where: {
          id: taskId,
          userId
        }
      });
      if (!task)
        throw { error: "No task found with given id for corrosponding user" };
      return task;
    } catch (err) {
      console.log("Something went wrong on repository layer");
      throw err;
    }
  }

  async getAllTasks(userId) {
    try {
      const tasks = await Task.findAll({
        where: {
          userId
        }
      });

      if (!tasks.length) {
        throw { error: "No tasks found for corrosponding user" };
      }
      return tasks;

    }
    catch (err) {
      console.log("Something went wrong on repository layer");
      throw err;
    }
  }
  async updateTask(taskId, data, userId) {
    try {
      const task = await Task.findOne({
        where: {
          id: taskId,
          userId
        }
      });

      if (!task) {
        throw { error: "No task found with given id for corrosponding user" };
      }
      const updatedTask = this.updateTaskFields(task, data);
      await updatedTask.save();
      return updatedTask;
    } catch (err) {
      console.log("Something went wrong on repository layer");
      throw err;
    }
  }

  async deleteTask(taskId, userId) {
    try {
      const response = await Task.destroy({
        where: {
          id: taskId,
          userId
        },
      });
      console.log(response);
      if (!response) {
        throw { error: "No task found with given id for corrosponding user" };
      }
      return true;
    } catch (err) {
      console.log("Something went wrong on repository layer");
      throw err;
    }
  }
}

module.exports = TaskRepository;
