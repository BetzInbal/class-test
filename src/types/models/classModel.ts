import mongoose, { Schema, Document } from "mongoose";

export class Igrade {
  constructor(  
    suidentId: Schema.Types.ObjectId,
    grade:number){}
}

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
    type:[Igrade],
    default:[],
    ref:'users'
  }
})

export interface Iclass extends Document {
  classname: string;
  tests: Itest[];
}

const CclassSchema = new Schema<Iclass>({
  classname:{
    type:String,
    required:[true,'class name mast by provaided'],
    unique:true
  },
  tests:{
    type:[mongoose.model<Itest>("test", testSchema)]
  }
});


export default mongoose.model<Iclass>("class", CclassSchema);