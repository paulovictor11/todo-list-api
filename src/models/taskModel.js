const connection = require("./connection");

const getAll = async () => {
    const [tasks] = await connection.execute("SELECT * FROM tasks");
    return tasks;
};

const createTask = async (task) => {
    const { title } = task;

    const [createdTask] = await connection.execute(
        "INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)",
        [title, "pendente", new Date().toUTCString()]
    );

    return { insertId: createdTask.insertId };
};

const updateTask = async (id, task) => {
    const { title, status } = task;

    connection.execute("UPDATE tasks SET title = ?, status = ? WHERE id = ?", [
        title,
        status,
        id,
    ]);
    return;
};

const deleteTask = async (id) => {
    await connection.execute("DELETE FROM tasks WHERE id = ?", [id]);
    return;
};

module.exports = { getAll, createTask, updateTask, deleteTask };
