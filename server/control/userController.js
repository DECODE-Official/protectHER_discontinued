const userModel= require("../model/userSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async(req, res) => {
    const {name,email,phone_no,password,confirm_password,gurdian_1_no,gurdian_2_no} = req.body;

    if(!name || !email || !phone_no || !password || !confirm_password || !gurdian_1_no || !gurdian_2_no)
    {
        return res.status(402).json({error : "Please fill all the necessary details."});
    }

    try{
        const existingUser = await userModel.findOne({email:email});
        const existingPhone_no = await userModel.findOne({phone_no:phone_no});
        if(existingUser){
            return res.status(400).json({message: "user already exists"})
        }
        if(password !== confirm_password)
        {
            return res.json({message : "Password doesn't match"});
        }
        if(existingPhone_no)
        {
            return res.status(400).json({message: "Phone no already exists"});
        }
        else
        {
            const hashedpassword = await bcrypt.hash(password,10);

            const result = await userModel.create({
            name:name,
            email: email,
            phone_no: phone_no,
            password: hashedpassword,
            confirm_password:confirm_password,
            gurdian_1_no:gurdian_1_no,
            gurdian_2_no:gurdian_2_no
            });
            
        }
    }
    
    catch(error){
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
}

const login = async (req, res) => {

    const {email,password} = req.body;

    if(!email || !password)
    {
        return res.status(402).json({message: "Please fill all the necessary details."});
    }

    try{
        const existingUser = await userModel.findOne({email:email});

        if (!existingUser)
        {
            return res.status(404).json({message: "User not found"});
        }

        else
        {
            const matchPassword = await bcrypt.compare(password, existingUser.password);

            if(matchPassword)
            {
                return res.status(200).json({message: "User Signin Successfully"});
            }
            else
            {
                return res.status(400).json({message: "Invalid Credentials"});
            }
        }
        
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message: "Something went wrong"}); 
    }
}

module.exports = {register, login};