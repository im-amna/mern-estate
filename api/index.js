import { error } from "console";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to Mongodb");
  })
  .catch((error) => {
    console.log("error" + error);
  });

const app = express();
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
