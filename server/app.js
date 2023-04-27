const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const bcrypt = require("bcrypt");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");

app.use(express.json());
app.use("/users", userRoutes);
app.use("/note",noteRoutes);
app.use(express.urlencoded({extended: false}))
dotenv.config({path: './config.env'});

require('./db/conn');

const PORT = process.env.PORT;


mongoose.connect("mongodb+srv://mensa:computerscience@cluster0.mwueqfy.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    app.listen(PORT, (err)=>{
        if(err)
        {
            console.log(err);
        }
        console.log(`server started on port ${PORT}`);
    })
})
.catch((error) => {
    console.log(error);
})
