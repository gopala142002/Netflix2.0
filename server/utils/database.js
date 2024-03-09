import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connected to mongoDB");
    }).catch((error)=>{
        console.log(error);
    })
};
export default dbConnection;