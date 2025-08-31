import mongoose from "mongoose";
const User=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
    },
    created_at:{
        type:Date,
        default:Date.now(),
    }
});

export default mongoose.models.users || mongoose.model('users',User);