//Import the Model
const Todo = require("../models/Todo")


//Define Route Handler
exports.getTodos = async (req, res) => {
    try {
        //Fetch all todo list from database
        const todos = await Todo.find({});

        //Response
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Data fetched"
        })

    }
    catch (error) {
        console.error(error);
        console.log(error)
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: error.message
        })
    }
}


exports.getTodosById = async (req, res) => {
    try {

        //extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        //Data for given id not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No Data found"
            })
        }

        //Response
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} Data Successfully fetched`
        })

    } catch (error) {
        console.error(error);
        console.log(error)
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: error.message
        })
    }
}