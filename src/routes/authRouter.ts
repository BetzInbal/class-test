import { Router } from "express";
import {login} from "../controllers/authController";

const authRouter = Router();


const router = require('express').Router()

router.post('/login',login)

//router.delete('/logout', authController.logout)

export default authRouter;
