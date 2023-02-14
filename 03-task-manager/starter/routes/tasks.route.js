const express = require('express');
const router = express.Router();
const taskController = require('../controller/tasks.controller');

router.route('/')
    .get(taskController.getAllTasks)
    .post(taskController.createTask)
    .patch(taskController.updateTask)
    .delete(taskController.deleteTask);

router.route('/:id')
    .get(taskController.getTask);

module.exports = router;