const jwt = require("jsonwebtoken");

const { UserRepository } = require("../repository/index");

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUser(userId) {
        try {
            const user = await this.userRepository.getUser(userId);
            return user;
        }
        catch (err) {
            console.log("Something went wrong on service layer");
            throw err;
        }
    }

    #createJwtToken(user) {
        try {
            const token = jwt.sign({ id: user.id }, "This is my secreate key", { expiresIn: "3h" });
            return token;
        } catch (err) {
            console.log("Something went wrong on token creation process");
            throw err;
        }
    }
    async signIn({ email, password }) {
        try {
            const user = await this.userRepository.getUserByEmail(email);
            if (!user)
                throw { error: "No user found for corrosponding email id" };

            if (password != user.password)
                throw { error: "Incorrect password" };

            const token = this.#createJwtToken(user);
            return token;
        }
        catch (err) {
            console.log("Something went wrong in signin process");
            throw err;
        }
    }
    async createUser(data) {
        try {
            const user = await this.userRepository.createUser(data);
            return user;
        }
        catch (err) {
            console.log("Something went wrong on service layer");
            throw err;
        }
    }

    async updateUser(userId, data) {
        try {
            const updatedUser = await this.userRepository.updateUser(userId, data);
            return updatedUser;
        }
        catch (err) {
            console.log("Something went wrong on service layer");
            throw err;
        }
    }

    async deleteUser(userId) {
        try {
            const response = await this.userRepository.deleteUser(userId);
            return response;
        }
        catch (err) {
            console.log("Something went wrong on service layer");
            throw err;
        }
    }

}



module.exports = UserService;