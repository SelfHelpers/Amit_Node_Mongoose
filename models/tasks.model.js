const mongoose = require('mongoose');
const { Schema, model, SchemaTypes } = mongoose;

const taskSchema = new Schema({
    title: String,
    description: String,
    dueDate: Date,
    priority: String,
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'User'
    }
});

const Task = model('Task', taskSchema);
module.exports = Task;