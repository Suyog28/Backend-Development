const express = require("express");
const router = express.Router();

//Import Controller

const { createTodo } = require("../controllers/createTodo");
const { getTodos, getTodosById } = require("../controllers/getTodos");
const { updateTodos } = require("../controllers/updateTodos")
const { deleteTodos } = require("../controllers/deleteTodos")

//Define API Routes

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodos/:id", getTodosById);
router.put("/updateTodos/:id", updateTodos);
router.put("/updateTodos/:id", updateTodos);
router.delete("/deleteTodos/:id", deleteTodos);


module.exports = router;