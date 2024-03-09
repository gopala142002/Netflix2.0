import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const Login=async(req,res) => {
    try{
        console.log(req.body);
        const {email,password}=req.body;
        if(!email || !password)
        {
            return res.status(401).json({
                message:"Invalid Data",
                success:false
            });
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Invalid email",
                success:false
            })
        }
        // console.log(user.password);
        const doesExist=bcrypt.compare(password,user.password);
        if(!doesExist)
        {
            return res.status(401).json({
                message:"Invalid email or password",
                success:false
            })
        }
        const tokenData={
            id:user._id,

        }
        const token=jwt.sign(tokenData,"gopala",{expiresIn:"1d"});    

        return res.status(200).cookie("token",token,{httpOnly:true}).json({
            message:`Welcome back ${user.name}`,
            success:true
        });
    }
    catch(error)
    {
        console.log(error);
    }
}
export const Logout = async(req,res) => {
    return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
        message:"User logged out successfully...",
        success:true
    })
}

export const Register = async (req,res) => {
    try{
        let {name , email , password} = req.body;
        if(!name || !email || !password)
        {
            return res.status(401).json({
                message:"Invalid Data", 
                success:false
            })
        }   
        const user=await User.findOne({email});
        if(user)
        {
            return res.status(401).json({
                message:"This Email is already used.",
                success:false
            });
        }
        const hashedPass=await bcrypt.hash(password,10);
        // console.log(hashedPass);
        password=hashedPass;
        await User.create({name,email,password});
        return res.status(201).json({
            message:"Account created successfully.",
            success:true
        })
    }
    catch(error){
        console.log(error);
    }
}