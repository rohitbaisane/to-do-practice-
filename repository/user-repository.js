const { User } = require("../models/index");

class UserRepository {
  createUserObject(data) {
    let user = {};
    if (data.name) {
      user.name = data.name;
    }
    user.email = data.email;
    user.password = data.password;
    return user;
  }

  modifyUserFields(user, data) {
    if (data.name) {
      user.name = data.name;
    }
    if (data.email) {
      user.email = data.email;
    }
    return user;
  }
  async getUser(userId) {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (err) {
      console.log("Something went wrong on repository layer");
      throw err;
    }
  }

  async getUserByEmail(userEmail) {
    try {
      const user = await User.findOne({
        where: {
          email: userEmail
        }
      });
      return user;
    }
    catch (err) {
      console.log("Something went wrong on repository layer");
      throw err;
    }
  }
  async createUser(data) {
    try {
      const userObject = this.createUserObject(data);
      const user = await User.create(userObject);
      return user;
    } catch (err) {
      console.log("Something went wrong on repository layer");
      throw err;
    }
  }

  async updateUser(userId, data) {
    try {
      const user = await User.findByPk(userId);
      const updatedUser = this.modifyUserFields(user, data);
      await updatedUser.save();
      return updatedUser;
    } catch (err) {
      console.log("Something went wrong on repository layer");
      throw err;
    }
  }

  async deleteUser(userId) {
    try {
      const response = await User.destroy({
        where: {
          id: userId
        }
      });
      return response;
    }
    catch (err) {
      console.log("Something went wrong on repository layer");
      throw err;
    }
  }
}

module.exports = UserRepository;
