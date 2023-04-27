const userModel= require("../model/userSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async(req, res) => {
    const {name,email,password,confirm_password,gurdian_1_no,gurdian_2_no} = req.body;
    try{
        const existingUser = await userModel.findOne({email:email});
        if (existingUser){
            return res.stauts(400).json({message: "User already exist"})
        }
        const hashedpassword =await bcrypt.hash(password,10);

        const result =await userModel.create({
            name:name,
            email: email,
            password: hashedpassword,
            confirm_password:confirm_password,
            gurdian_1_no:gurdian_1_no,
            gurdian_2_no:gurdian_2_no

    });
    
    }
    
    catch (error){
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
}

const login = async (req,res) => {
    const {email,password}=req.body;
    try{
        const existingUser = await userModel.findOne({email:email});
        if (!existingUser){
            return res.stauts(404).json({message: "User not found"});
        }
        const matchPassword =await bcrypt.compare(password, existingUser.password);

        if(!matchPassword){
            return res.status(400).json({message: "Invalid Credentials"});

        }

    }
    catch{
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
}

module.exports = {register, login};