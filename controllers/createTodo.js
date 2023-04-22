//Import the Model

const Todo = require("../models/Todo")

//Define Route Handler

exports.createTodo = async (req, res) => {
    try {
        //Extract title and description from request body
        const { title, description } = req.body;

        //Create a New Todod Object and insert in DB
        const response = await Todo.create({ title, description });

        //Send a Json Response with a success flag

        res.status(200).json({
            success: true,
            data: response,
            message: "Entry Created Successfully"
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