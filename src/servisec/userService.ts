//import { users } from "../data/users";
//import { ReqWithUser } from "../middlewares/VertifyUser";
import ResponseData from "../types/DTO/ResponseData";
import SignupDto from "../types/DTO/SignupDto";
//import TokenPayloadDto from "../types/DTO/TokenPayloadDto";
//import User from "../types/models/User";
import bcrypt from 'bcrypt'
import userModel, { IUser } from "../types/models/userModel";
import classModel, { Iclass } from "../types/models/classModel";



export default class UserService {

    public static async signup(signUser: SignupDto): Promise<ResponseData<{ id: string } | unknown>> {
        try {          
            const newUser:IUser = await new userModel(signUser)
            newUser.hashedPassword = await bcrypt.hash(signUser.password, 10)
            if (newUser.role === 'student')
                {const corClass:Iclass | null=  await classModel.findOne({'classname':newUser.classname})
            if (!corClass){ throw new Error("class manedasnot exist")}
            newUser.classId = corClass.id
                }
            if (newUser.role === 'teacher')
            {
                
                const newClass = await new classModel({classname:newUser.classname})
                newUser.classId = newClass.id
                await newClass.save()
            }
            await newUser.save()
            
            return {
                err: false,
                message: `secsid`,
                data: { id: newUser.id },
                status: 201
            }
        } catch (error) {      
            return {
                err: true,
                status: 404,
                data: error
            }
        }
    }

}