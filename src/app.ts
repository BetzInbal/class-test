import express from "express";
import dotenv from "dotenv";
import gradeRouter from "./routes/gradeRoutes";
import userRouter from "./routes/userRoutes";
import authRouter from "./routes/authRouter"
import cookieParser from "cookie-parser";
import connectDB from "./config/db";

dotenv.config();
connectDB()
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser())


// Routes
app.use("/auth", authRouter);
app.use("/grade", gradeRouter);
app.use("/user", userRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
