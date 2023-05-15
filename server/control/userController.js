const express = require('express');
const userModel= require("../model/userSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const signup = async(req, res) => {
    

    const {name,email,phone_no,password,confirm_password} = req.body;

    if(!name || !email || !phone_no || !password || !confirm_password )
    {
        return res.status(402).json({error : "Please fill all the necessary details."});
    }

    try{
        const existingUser = await userModel.findOne({email:email});
        const existingPhone_no = await userModel.findOne({phone_no:phone_no});
        if(existingUser){
            return res.status(400).json({message: "user already exists!"})
        }
        if(password !== confirm_password)
        {
            return res.json({message : "Password doesn't match!"});
        }
        if(existingPhone_no)
        {
            return res.status(400).json({message: "Phone no already exists!"});
        }
        else
        {
            const hashed_password = await bcrypt.hash(password,10);
            const hashed_confirm_password = await bcrypt.hash(confirm_password, 10);

            const result = await userModel.create({
            name:name,
            email: email,
            phone_no: phone_no,
            password: hashed_password,
            confirm_password:hashed_confirm_password, 
           
            });
            return res.json({message: "User Registered Sucessfully"});
            
        }
    }
    
    catch(error){
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
}

const login = async (req,res) => {
    try {

        //data fetch
        const {email, password} = req.body;

        //validation on emial and password
        if(!email || !password) {
            return res.status(400).json({
                success:false,
                message:'Please fill all the details carefully',
            });
        }

        //check for registered user
        let user = await userModel.findOne({email});

        //if not registered user
        if(!user) {
            return res.status(401).json({
                success:false,
                message:'User is not registered',
            });
        }

        let payload = {
            email:user.email,
            id:user._id,
            role:user.role,
        };

        //verify password & generate a JWT Token
        if(await bcrypt.compare(password,user.password)) {
            //password match
            let token = jwt.sign(payload, 
                                process.env.JWT_SECRET,
                                {
                                    expiresIn: "2h",
                                });

            user = user.toObject();                    
            user.token = token;
            user.password = undefined;
            
            const options = {
                    expires: new Date( Date.now() + 3 * 24 * 60 * 1000),
                    httpOnly:true,
            }

            res.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                mesaage:'Usser Logged in successfully',
            });
        }
        else {
            //password do not match
            return res.status(403).json({
                success:false,
                message:"Password Incorect",
            });
        }
    }
    catch(error) {
        console.group(error);
        return res.status(500).json({
            success:false,
            message:'Login Failure,'
        });
    }
}

module.exports = {signup, login};