import connectDB from "@/lib/dbConnect";
import todoModel from "@/model/todoModel";

export async function saveToDo(data) {
    await connectDB();

    const res = await todoModel(data).save();
    return {data:{message:"ToDo saved successfullt!", todoId:res._id},status:201};
}

export async function getUserToDos(userId) {
    await connectDB();

    const res = await todoModel.find({user_id:userId});
    return {data:{message:"User's todo list fetched!",todos:res},status:200};
}

export async function updateUserToDo(id,todoData) {
    await connectDB();

    await todoModel.findByIdAndUpdate(id,todoData);
    return {data:{message:"ToDo updated successfully!"},status:201};
}

export async function deleteUserTodo(id) {
    await connectDB();

    await todoModel.findByIdAndDelete(id);
    return {data:{message:"ToDo deleted successfully!"},status:200};
}