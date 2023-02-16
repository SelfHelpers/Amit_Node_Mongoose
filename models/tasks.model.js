const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const taskSchema = new Schema({
    title: String,
    description: String,
    dueDate: Date,
    priority: String
});

const Task = model('Task', taskSchema);
module.exports = Task;