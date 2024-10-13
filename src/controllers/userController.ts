import { Request, Response } from "express";
import UserService from "../servisec/userService";
import ResponseData from "../types/DTO/ResponseData";
import { ReqWithUser } from "../middlewares/VertifyUser";

export const createUser = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        
        const result:ResponseData<{ id: string } | unknown> = await UserService.signup(req.body)
        
        res.status(result.status || 201)
        .json(result)   
    } catch (error) {
        res.status(500).json(error)
    }
 };

export const getUsers = async (req: Request | ReqWithUser, res: Response) => { };

export const getUser = async (req: Request | ReqWithUser, res: Response) => { };

// Optionally, add DELETE and EDIT functions
