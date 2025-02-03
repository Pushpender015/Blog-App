// work of this function :- 
// build connection between application and database

const mongoose = require("mongoose");

require("dotenv").config(); // all data of .env file are loaded in process object

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB facing connection issues");
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithDb;