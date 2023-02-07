const { UserService } = require("../services/index");
const userService = new UserService();

const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.id);
        return res.status(200).json({
            success: true,
            data: user,
            message: "Successfully fetched a user",
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

const signIn = async (req, res) => {

    try {
        const response = await userService.signIn(req.body);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Successfully signed in",
            error: err
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            data: {},
            message: "Internal server error",
            error: err
        });
    }
}
const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(200).json({
            success: true,
            data: user,
            message: "Successfully created a user",
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

const updateUser = async (req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        return res.status(201).json({
            success: true,
            data: updatedUser,
            message: "Successfully updated a user",
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

const deleteUser = async (req, res) => {
    try {
        const response = await userService.deleteUser(req.params.id);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Successfully deleted a user",
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
    getUser,
    createUser,
    updateUser,
    deleteUser,
    signIn
};
