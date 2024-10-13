import { Request, Response } from "express"
import signInDto from '../types/DTO/signInDto';
import AuthService from '../servisec/authService';

export const login = async (
  req:Request<any, any, signInDto>, res:Response): Promise<void> =>{
    try {
        const result = await AuthService.signIn(req.body)
        res.status(result.status!).cookie(`token`,result.data) .json(result)
        
    } catch (error) {
        console.log(error);
        
    }
}
