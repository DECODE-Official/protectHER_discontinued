const mongoose = require('mongoose');

// const DB = process.env.DATABASE;
const DB = 'mongodb+srv://mensa:computerscience@cluster0.mwueqfy.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true   
})
.then(()=>{
    console.log("Connected with MonogoDB");
})
.catch((err)=>{
    console.log(err);
})
