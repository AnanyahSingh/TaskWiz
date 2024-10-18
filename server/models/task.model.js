const mongoose = require ('mongoose');

const TaskSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "Please enter task name"],
        },
        quantity: {
            type:Number,
            required: true,
            default: 0,
        },
        price: {
            type:Number,
            required: true,
            default: 0,
        },
        image: {
            type:String,
            required: false,
        },
    },
    {
        timestamps: true, //allows createdAt and updatedAt fields
    }
);

const Task= mongoose.model("Task", TaskSchema);

module.exports = Task;