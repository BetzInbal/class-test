import mongoose, { Schema, Document, Types } from "mongoose";


export interface IUser extends Document {
  username: string;
  hashedPassword:string
  email: string;
  role:string;
  classname:string
  classId: Schema.Types.ObjectId;
}


const UserSchema = new Schema<IUser>({
  username:{
    type:String,
    min:[3,'min lenght for name is 3 leeters'],
    required:[true,'user name is required'],
    unique:true
  },
  hashedPassword:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:[true,'email is required'],
    unique:true
  },
  role:{
    type:String,
    enum:['teacher', 'student'],
    required:[true, 'pliase provide a role']},
  classname:{
    type:String, 
    required:[true, 'pliase provide an class name']},
 classId:{
    type:Schema.Types.ObjectId,
    ref:'classes',
    required:[true,'please specifi at least one unit']
}
  
});

export default mongoose.model<IUser>("user", UserSchema);

