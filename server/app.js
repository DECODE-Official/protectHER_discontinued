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


app.listen(PORT, (req, res)=>{
    console.log(`Server listening at Port ${PORT}`);
})
