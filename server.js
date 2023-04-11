const express = require("express");
const app = express();

//used to parse req.body in express->PUT or POST
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Server started on port 3000");
})

app.get("/", (req, res) => {
    res.send("First Route Cretaed");
})

app.post("/api/car", (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Details submitted Successfully");
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("connected") })
    .catch((error) => { console.log(error) });