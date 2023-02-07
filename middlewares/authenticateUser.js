const { UserService } = require("../services/index");
const userService = new UserService();

const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token'];

        if (!token)
            throw { error: "Token is missing" };

        const decodedToken = jwt.verify(token, "This is my secreate key");

        const user = await userService.getUser(decodedToken.id);

        if (!user)
            throw { error: "No user corrosponds to given token" };

        req.user = user;
        next();
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            data: {},
            message: "Can not authenticate user",
            error: err
        })
    }

}


module.exports = authenticateUser;