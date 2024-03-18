import express from "express";
import dotenv from "dotenv";
import dbConnection from "../server/utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dbConnection();
dotenv.config({
  path: ".env",
});
const app = express();
const port = process.env.PORT || 3333;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials:true
};

app.use(cors(corsOptions));
app.get("/", () => {
  console.log("Holla friend.....");
});
app.use("/server/gopala/user", userRoute);
app.listen(port, () => {
  console.log(`Server is Running at PORT ${port}`);
});
