import mongoose from "mongoose"     
const schema=new mongoose.Schema({   //create schema structure
    fname:{
        type:String
    },
    email:{
        type:String
    },
    hobbies:{
        type:String
    }
})
export default mongoose.todos||  mongoose.model("todo",schema);   