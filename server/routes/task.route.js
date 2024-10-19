const express = require("express");
const {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/task.controller.js');

const router = express.Router();

// Route to get all tasks
router.get('/', getTasks);

// Route to get a single task by id
router.get("/:id", getTask);

// Route to create a new task
router.post("/", createTask);

// Route to update a task by id
router.put("/:id", updateTask);  // Changed to PUT for updating

// Route to delete a task by id
router.delete("/:id", deleteTask);  // Fixed the route syntax

module.exports = router;
