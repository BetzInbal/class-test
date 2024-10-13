import mongoose, { Schema, Document } from "mongoose";

export interface Igrade extends Document{
    suidentId: Schema.Types.ObjectId,
    grade:number
}

const gradeSchema = new Schema<Igrade>({
  suidentId:{
    type:Schema.Types.ObjectId,
    ref:'users',
    required:[true,'student id mast by provaided']
  },
  grade:{
    type:Number,
    required:[true,'grade id mast by provaided']
  },
})

export interface Itest extends Document {
  subject: string;
  date: Date;
  grades: [Igrade];
}

const testSchema = new Schema<Itest>({
  subject:{
    type:String,
    required:[true,'class name mast by provaided'],
    unique:true
  },
  date:{
    type:Date,
    default: Date.now()
  },
  grades:{
    type:[gradeSchema],
    default:[],
  }
})
 
export interface Iclass extends Document {
  classname: string;
  tests: Itest[];
}

const classSchema = new Schema<Iclass>({
  classname:{
    type:String,
    required:[true,'class name mast by provaided'],
    unique:true
  },
  tests:{
    type:[testSchema]
  }
});


export default mongoose.model<Iclass>("class", classSchema);