const express = require("express");
const taskController = require("./controllers/taskController");
const taskMiddleware = require("./middlewares/taskMiddleware");

const router = express.Router();

router.get("/tasks", taskController.getAll);
router.post(
    "/tasks",
    taskMiddleware.validateFieldTitle,
    taskController.createTask
);
router.put(
    "/tasks/:id",
    taskMiddleware.validateFieldTitle,
    taskMiddleware.validateFieldStatus,
    taskController.updateTask
);
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
