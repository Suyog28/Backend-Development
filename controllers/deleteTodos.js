//Import the Model
const Todo = require("../models/Todo")

//Define Route Handler
exports.deleteTodos = async (req, res) => {
    try {
        //Fetch all todo list from database
        const { id } = req.params;
        const todos = await Todo.findByIdAndDelete({ _id: id });

        //Response
        res.status(200).json({
            success: true,
            data: todos,
            message: "Deleted successfully"
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
