import connectDB from "@/lib/dbConnect";
import userModel from "@/model/userModel";

export async function saveUser(userData) {
    await connectDB();

    const existingUser=await userModel.findOne({email:userData.email});
    if(!existingUser){
        const newUser=await userModel(userData).save();
        return {data:{message:"Registered successfully!",userId:newUser._id},status:201};
    }

    return {data:{message:"Login successfully!",userId:existingUser._id},status:200};
}

export async function verifyUser(userId) {
    await connectDB();

    const userExist=await userModel.findById(userId);
    if(!userExist){
        return {data:{message:"User not found!"},status:400};
    }

    return {data:{message:"User found!"},status:200};
}