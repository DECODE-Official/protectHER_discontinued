const express= require("express");
const { register, login } = require("../control/userController");
const userRoutes = express.Router();

<<<<<<< HEAD
=======

userRoutes.get("/", (req, res)=>{
    return res.json({message: "Hello bhailog"});
})

>>>>>>> f5d18f68f9563528aba3ef0184013fc50b8df70a
userRoutes.post("/register", register);

userRoutes.post("/login", login);

module.exports = userRoutes;