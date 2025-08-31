import mongoose from 'mongoose';

const ToDo=new mongoose.Schema({
    todo:{
        type:String,
        required:true,
    },
    is_done:{
        type:Boolean,
        default:false,
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
    created_at:{
        type:Date,
        default:Date.now(),
    },
});

export default mongoose.models.todos || mongoose.model("todos",ToDo)