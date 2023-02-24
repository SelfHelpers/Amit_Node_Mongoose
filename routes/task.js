const express = require('express');
const router = express.Router();

const Task = require('../models/tasks.model');

const { deleteTaskById } = require('../controllers/TaskControllers');

// Get All Tasks
router.route('/').get( async (req, res) => {

    let taskData;
    await Task.find().then(tasks => {
        taskData = tasks;
        res.json({
            message: "Data Fetched",
            tasks: tasks
        })
    });
    console.log(taskData);
});


// Save a new Task
router.route('/addTask').post( async (req, res) => {

    // const newTask = new Task({
    //     title: 'Mongoose Demo',
    //     description: 'mongoose Description',
    //     dueDate: new Date(),
    //     priority: 'High'
    // });

    // const newTaskFromJson = new Task({
    //     title: req.body.title,
    //     description: req.body.description,
    //     dueDate: new Date(),
    //     priority: req.body.priority
    // });

    await Task.create({
        title: req.body.title,
        description: req.body.description,
        dueDate: new Date(),
        priority: req.body.priority,
        user: '63f74a32f3be7d6127b98aa3'
    }).then((value) => {
        res.json({
            message: "Task Added Successfully",
            data: value
        });
    }).catch((err) => {
        res.json({
            message: err.message
        });
    });

});

router.route('/getByUser/:id').get( async (req, res) => {
    await Task.where("user").equals(req.params.id).then(data => {
        res.json({
            message: 'Data Fetched successfully',
            data: data
        });
    }).catch(err => {
        res.status(404).json({
            message: 'Failed to fetch data',
            data: err.message
        });
    });
})

router.route('/update/:id').post( async (req, res) => {
    
    await Task.findById(req.params.id)
        .then(taskData => {
            taskData.title = req.body.title;
            taskData.description = req.body.description;
            taskData.dueDate = new Date();
            taskData.priority = req.body.priority;
            taskData.save().then((updatedTask) => {
                res.json({
                    message: "Task updated",
                    data: updatedTask
                })
            }).catch((error) => {
                res.json({
                    message: "Task failed",
                    error: error
                });
            })
        })
})

router.route('/getTask/:id').get( async (req, res) => {
    await Task.findById(req.params.id).then((task) => {
        res.json({
            message: 'Task Retrieved',
            data: task
        });
    }).catch((error) => {
        res.json({
            message: "Task failed",
            error: error.message
        });
    });
})

router.route('/deleteTask/:id').delete( deleteTaskById );


module.exports = router;