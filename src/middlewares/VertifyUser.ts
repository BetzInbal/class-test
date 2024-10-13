import { NextFunction, Request, Response } from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken";
import TokenPayloadDto from "../types/DTO/TokenPayloadDto";




export const VertifyUser = async (req:Request | ReqWithUser, res:Response, next:NextFunction) =>{
    try {
        const token :string = req.cookies.token
        
        const payload:TokenPayloadDto = jwt.verify(token, process.env.SECRET_KEY as string) as TokenPayloadDto
        (req as ReqWithUser).user = payload
        
        next()
        
    } catch (error) {
        if (error instanceof TokenExpiredError)
        {            res.status(401).json({
            err: true,
            message: "Token expiered",
            data: error
        })}
        else {
            res.status(400).json({
                err: true,
                message: "Token corepted",
                data: error
            })
        }
    }
}

  


export interface ReqWithUser extends Request {
    user: TokenPayloadDto

}