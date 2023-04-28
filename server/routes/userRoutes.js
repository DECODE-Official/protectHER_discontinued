const express= require("express");
const { register, login } = require("../control/userController");
const userRoutes = express.Router();


userRoutes.get("/", (req, res)=>{
    return res.json({message: "Hello bhailog"});
})

userRoutes.post("/register", register);

userRoutes.post("/login", login);

module.exports = userRoutes;