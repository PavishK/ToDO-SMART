import { deleteUserTodo, getUserToDos, updateUserToDo } from "@/controller/todoController";
import { NextResponse } from "next/server";


export async function GET(_,{params}) {
    try {
        const {id} = await params;
        if(!id){
            return NextResponse.json({message:"Missing Id!"},{status:400});
        }
        const { data, status } = await getUserToDos(id);
        return NextResponse.json(data, {status});
    } catch (error) {
        return NextResponse.json({message:"Internal server error!"},{status:500});
    }
}

export async function PUT(request,{params}) {
    try {
        const {id} = await params;
        const {todo, is_done}=await request.json();
        if(!id){
            return NextResponse.json({message:"Missing Id!"},{status:400});
        }
        const { data, status } = await updateUserToDo(id,{todo,is_done});
        return NextResponse.json(data,{status});
    } catch (error) {
        return NextResponse.json({message:"Internal server error!"},{status:500});
    }
}

export async function DELETE(_,{params}) {
    try {
        const {id} = await params;
        if(!id){
            return NextResponse.json({message:"Missing Id!"},{status:400});
        }
        const {data,status}=await deleteUserTodo(id);
        return NextResponse.json(data,{status});
    } catch (error) {
        return NextResponse.json({message:"Internal server error!"},{status:500});
    }
}