import express, { Router } from "express";
import dotenv from "dotenv";
import ConnectDb from "./db/connect.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connect } from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//cors config for frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

//-----------------------------Route Handlers goes here--------------------------
import authRoutes from "./routes/auth.routes.js";

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
  ConnectDb();
});
