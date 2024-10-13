import { Router } from "express";
import { createUser, getUser, getUsers } from "../controllers/userController";
import { VertifyUser } from "../middlewares/VertifyUser";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", VertifyUser, getUsers);
userRouter.get("/:username", VertifyUser, getUser);

export default userRouter;
