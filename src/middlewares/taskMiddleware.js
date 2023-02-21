const validateFieldTitle = (req, res, next) => {
    const { title } = req.body;

    if (!title) {
        return res
            .status(400)
            .json({ message: "The title field is required." });
    }

    next();
};

const validateFieldStatus = (req, res, next) => {
    const { status } = req.body;

    if (!status) {
        return res
            .status(400)
            .json({ message: "The status field is required." });
    }

    next();
};

module.exports = { validateFieldTitle, validateFieldStatus };
