const mongoose = require("mongoose");
const taskSchema = mongoose.Schema(
    {
        name:{
            typeof: String,
            required: [true, "Add a task"]
            
        }, 
        completed: {
            type: Boolean,
            required:true,
            default:false
        },
        taskDescription:{
            typeof: String,
            required: [true, "Add task description"]
             
        }, 
    },
    {
        timestamps: true
    }
)

 const Task = mongoose.model("Task", taskSchema);

 module.exports = Task 