const taskModel = require("../models/taskModel");

const getAll = async (_, res) => {
    const tasks = await taskModel.getAll();
    return res.json(tasks);
};

const createTask = async (req, res) => {
    const createdTask = await taskModel.createTask(req.body);
    return res.status(201).json(createdTask);
};

const updateTask = async (req, res) => {
    const { id } = req.params;

    await taskModel.updateTask(id, req.body);
    return res.status(204).json();
};

const deleteTask = async (req, res) => {
    const { id } = req.params;

    await taskModel.deleteTask(id);
    return res.status(204).json();
};

module.exports = { getAll, createTask, updateTask, deleteTask };
