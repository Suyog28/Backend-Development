const express = require("express");
const router = express.Router();

//Import Controller

const { createTodo } = require("../controllers/createTodo");

//Define API Routes

router.post("/createTodo", createTodo);

module.exports = router;