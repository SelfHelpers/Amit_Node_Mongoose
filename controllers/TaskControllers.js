const Task = require('../models/tasks.model');


const deleteTaskById = async (req, res) => {
    await Task.deleteOne({ _id: req.params.id }).then((updatedTask) => {
        res.json({
            message: "Task Deleted successfully",
            data: updatedTask
        })
    }).catch((error) => {
        res.json({
            message: "Task failed",
            error: error
        });
    })

}

module.exports = { deleteTaskById };