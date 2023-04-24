const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');

app.use(express.json());

dotenv.config({path: './config.env'});

require('./db/conn');

const PORT = process.env.PORT;

app.listen(PORT, (err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log(`server started on port ${PORT}`);
})

