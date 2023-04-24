const mongoose = require('mongoose');

// const DB = process.env.DATABASE;
const DB = 'mongodb+srv://mensa:computerscience@cluster0.mwueqfy.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB)
.then(()=>{
    console.log("Connection Successfully to MongoDB");
})
.catch((err)=>{
    console.log(err);
})
