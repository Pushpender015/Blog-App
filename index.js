// create instance of server
const express = require('express');
const app = express();

// load the data of .env file into process object
require("dotenv").config();

// find port no
const PORT = process.env.PORT || 3000;  // if PORT are not working the automatically 3000 port are working

// MIDDLEWARE {--- built‑in middleware that automatically handles (or “parses”) any incoming requests with JSON data---}
app.use(express.json());

const blog = require("./routes/blog")

// mounting with URL
    /*
        1. https://localhost/
        2. api/v1/
        3. which one route or path we want to use
    */
app.use("/api/v1" , blog);

const connectWithDB = require("./config/database");
connectWithDB();

// start the server
app.listen(PORT , () => {
    console.log(`app is started at Port no ${PORT}`);
})

// default route ( just for UI interaction )
app.get("/" , (req , res) => {
    res.send(`<h1>this is my home page</h1>`);
})