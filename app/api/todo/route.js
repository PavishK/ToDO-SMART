import { saveToDo } from "@/controller/todoController";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        const { todo, user_id}=await request.json();
        if(!todo || !user_id){
            return NextResponse.json({message:"Missing data!"},{status:400});
        }
        const { data, status } = await saveToDo({todo,user_id});
        return NextResponse.json(data,{status});
    } catch (error) {
        return NextResponse.json({message:"Internal server errror"},{status:500});
    }
}