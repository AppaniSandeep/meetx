const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const UserModel = require("../Models/user");

const register = async (req,res) => {
    try {
        const {username,email,password} = req.body;

        const user = await UserModel.findOne({email})

        if (user){
            return res.status(400).send("User already exist")
        }

        const userModel = new UserModel({username,email,password});
        userModel.password = await bcrypt.hash(password,10);

        await userModel.save();

        res.status(201).json({message:"Registered Successfull",success:true})
     } catch (e) {
        res.status(500).json({message:"Internal Server Error", success:false})
     }
}


const login = async (req,res) => {
    try {
        const {username,password} = req.body;
        const user = await UserModel.findOne({username});
        const errorMsg = "Authorization failed username or password wrong";

        if (!user){
            return res.status(400).json({message:errorMsg,success:false});
        }

        const isPasswordMatched = await bcrypt.compare(password,user.password);


        if (!isPasswordMatched) {
            return res.status(400).json({message:errorMsg,success:false})
        }

        const jwtToken= jwt.sign({username:user.username,_id:user._id},process.env.JWT_SECRET,{expiresIn:"24h"})

        res.status(200).json({message:"Login Succefull",jwtToken,username:user.username,success:true})

    } catch (e) {

        res.status(500).json({message:"Internal server error",success:false})

    }
}

module.exports = {register,login}