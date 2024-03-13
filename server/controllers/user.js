import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const Login=async(req,res) => {
    try{
        console.log(req.body);
        let {email,password}=req.body;
        if(!email || !password)
        {
            return res.status(401).json({
                message:"Email or Password field can't be empty.",
                success:false
            });
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Invalid email or Password",
                success:false
            })
        }
        const doesExist=await bcrypt.compare(password,user.password);
        if(!doesExist)
        {
            return res.status(401).json({
                message:"Invalid email or password",
                success:false
            })
        }
        const tokenData={
            id:user._id
        }
        const token=jwt.sign(tokenData,"gopala",{expiresIn:"1d"});    
        return res.status(201).cookie("token",token,{httpOnly:true}).json({
            user:user,
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
    return res.status(201).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
        message:"User logged out successfully...",
        success:true
    })
}

export const Register = async (req,res) => {
    try{
        console.log(req.body);
        let {name , email , password} = req.body;
        if(!name || !email || !password)
        {
            return res.status(401).json({
                message:"Empty field...", 
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
        password=hashedPass;
        await User.create({name,email,password});
        return res.status(201).json({
            user:user,
            message:"Account created successfully.",
            success:true
        })
    }
    catch(error){
        console.log(error);
    }
}