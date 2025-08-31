import { saveUser } from "@/controller/userController";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {name,email,image}=await request.json();
        const { data, status }=await saveUser({name,email,image});
        return NextResponse.json(data,{status});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"Internal server error!"},{status:500});
    }
}