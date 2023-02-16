const mongoose = require('mongoose');
const express = require('express');
const app = express();


const Task = require('./models/tasks.model');

const PORT = 3000;

mongoose.connect("mongodb+srv://AmitRaj:AmitRaj123@cluster0.yog8h5r.mongodb.net/test",{}, (err) => {
    if (err) {
        console.error('Error connecting to database', err);
    } else {
        console.log('Connected to database');
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    }
});





async function getData(params) {
    let taskData;
    const tasks = await Task.find().then(tasks => {
        taskData = tasks;
    });
    console.log(taskData);
}


async function saveData(params) {
    const newTask = new Task({
        title: 'Mongoose Demo44',
        description: 'mongoose Description',
        dueDate: new Date(),
        priority: 'Low'
    });

    newTask.save().then(() => {
        console.log('Task saved successfully');
        console.log(newTask);
    });
}

saveData();
