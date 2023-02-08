const validateTaskInsertion = async (req, res, next) => {

    try {
        if (!req.body.description) {
            throw { error: "Insufficient parameters" };
        }

        next();

    }
    catch (err) {
        return res.status(400).json({
            success: false,
            data: {},
            message: "Cannot insert task",
            error: err
        });
    }
}


module.exports = validateTaskInsertion
