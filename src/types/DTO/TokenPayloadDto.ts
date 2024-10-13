import { Schema } from "mongoose"

export default interface TokenPayloadDto{
    userName:string
    id:string
    classId:Schema.Types.ObjectId
    role:string
}