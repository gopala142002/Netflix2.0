import express from "express";
import dotenv from 'dotenv';
import dbConnection from "../server/utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from './routes/userRoute.js'

dbConnection();
dotenv.config({
    path:".env"
});
const app=express();
const port=process.env.PORT || 3333;

app.use(express.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.status(201).json({
        message:"Holla friedns",
        success:true
    })
})
app.use('/server/gopala/user',userRoute);
app.listen(port,()=>{
    console.log(`Server is Running at PORT ${port}`)
});