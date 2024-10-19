const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter task title"],
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ['pending', 'in progress', 'completed'], // Task status
      default: 'pending',
    },
  },
  {
    timestamps: true, // Allows createdAt and updatedAt fields
  }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
