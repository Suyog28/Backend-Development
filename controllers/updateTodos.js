//Import the Model
const Todo = require("../models/Todo")

//Define Route Handler
exports.updateTodos = async (req, res) => {
    try {
        //Fetch all todo list from database
        const { id } = req.params;
        const { title, description } = req.body;
        const todos = await Todo.findByIdAndUpdate(
            {
                _id: id
            },
            {
                title, description, updatedAt: Date.now()
            }
        )

        //Response
        res.status(200).json({
            success: true,
            data: todos,
            message: "Updated successfully"
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
