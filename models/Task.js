const mongoose = require('mongoose');

// Create the schema for  Task
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    }
}, {
    timestamps: true // To add createdAt and updatedAt automatically
});

module.exports = Task = mongoose.model("Task", TaskSchema);
