import { Router } from "express";
import {login} from "../controllers/authController";

const authRouter = Router();



authRouter.post('/login',login)

//router.delete('/logout', authController.logout)

export default authRouter;
