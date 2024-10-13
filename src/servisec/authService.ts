import jwt, { Jwt } from "jsonwebtoken";
import ResponseData from "../types/DTO/ResponseData";
import SignupDto from "../types/DTO/SignupDto";
import TokenPayloadDto from "../types/DTO/TokenPayloadDto";
import userModel, { IUser } from "../types/models/userModel";
import bcrypt from 'bcrypt'



export default class AuthService{

    public static async signIn(signUser:SignupDto) : Promise<ResponseData<string | unknown>>
    {
        try {
            //Test sent name and password
            if(!signUser.userName || !signUser.password)
            {
                return{
                    err:true,
                    message:`mISSING MANDATORY DATA USERNAME OR PASSWORD`,
                    status:400
                }
            }
            //Checking that the user is in the DB
            const user:IUser | null =  await userModel.findOne({username:signUser.userName} )
            if(!user)
                {
                    return{
                        err:true,
                        message:`Userdas not found`,
                        status:400
                    }
                }
                //Checking that the entered password is the same as the password stored in the system
                if (!await bcrypt.compare(user.hashedPassword, signUser.password))
                    {
                        return{
                            err:true,
                            message:`Rong password`,
                            status:401
                        }
                    }
                    const payload:TokenPayloadDto = {
                        userName:user.username,
                        id:user.id,
                        classId :user.classId,
                        role:user.role
                    }
                    const token = jwt.sign(payload, process.env.SECRET_KEY as string) 
                    
                    return {
                        err:false,
                        message:`secsid`,
                        data:token,
                        status:200
                    }
                } catch (error) {
            return {
                err:true,
                status:500,
                data:error
            }
        }
    }
}


