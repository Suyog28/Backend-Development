const express = require("express");
const app = express();




//Load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// app.listen(3000, () => {
//     console.log("Server started on port 3000");
// })

//used to parse req.body in express->PUT or POST
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());


//Middleware to parse json request body
app.use(express.json());

//Import routes for TODO API
const todoRoutes = require("./routes/todoroute");

//mount the todo API routes
app.use("/api/v1", todoRoutes);


//Start Server
app.listen(PORT, () => {
    console.log("Server Started successfully at", `${PORT}`)
})

//Connect to the database

const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req, res) => {
    res.send(`<h1>This is HomePage</h1>`)
})

// app.get("/", (req, res) => {
//     res.send("First Route Cretaed");
// })

// app.post("/api/car", (req, res) => {
//     const { name, brand } = req.body;
//     console.log(name);
//     console.log(brand);
//     res.send("Car Details submitted Successfully");
// })

