// import statements
import express from "express";
import dotenv from "dotenv";
dotenv.config(); // dotenv configuration
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import eventRouter from "./routes/event.routes.js";
import path from "path";

// constants
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const _dirname = path.resolve();

// middlewars
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());

// routes
app.use("/api/user", userRouter);
app.use("/api/dashboard", eventRouter);

app.use(express.static(path.join(_dirname, "client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
}); // after all routes and middlewares

// mongo db connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Mongodb connected successfully!");
    // making express app a listener --> server will listen only after successful db conection
    try {
      app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server is running on port:http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => {
    console.log(error);
  });
