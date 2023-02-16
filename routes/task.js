const express = require('express');
const router = express.Router();

const Task = require('../models/tasks.model');


// Get All Tasks
router.get('/', async (req, res) => {
    // res.send('Inside Router Module Level 1');

    let taskData;
    const tasks = await Task.find().then(tasks => {
        taskData = tasks;
        res.json({
            message: "Data Fetched",
            tasks: tasks
        })
    });
    console.log(taskData);
});


// Save a new Task
router.post('/addTask', async (req, res) => {
    // res.send('Inside Router Module Level 2');
    // const newTask = new Task({
    //     title: 'Mongoose Demo',
    //     description: 'mongoose Description',
    //     dueDate: new Date(),
    //     priority: 'High'
    // });

    const newTaskFromJson = new Task({
        title: req.body.title,
        description: req.body.description,
        dueDate: new Date(),
        priority: req.body.priority
    });

    await newTaskFromJson.save().then(() => {
        res.json({
            message: "Task Added Successfully"
        });
    }).catch((err) => {
        res.json({
            message: err.message
        });
    });
    
});



module.exports = router;