import { GeminiMain } from "@/controller/GeminiController";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        const {todos} = await request.json();
        if(todos.length==0){
            return NextResponse.json({message:"Provide todo list!"},{status:400});
        }
        const {data,status}=await GeminiMain(todos);
        return NextResponse.json(data,{status});
    } catch (error) {
        return NextResponse.json({message:"Internal server error!"},{status:500})
    }
}