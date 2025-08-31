import { verifyUser } from "@/controller/userController";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {_id}=await request.json();
        if(!_id)
            return NextResponse.json({message:"Missing data!"},{status:400});
        const { data, status }=await verifyUser(_id);
        return NextResponse.json(data,{status});
    } catch (error) {
        return NextResponse.json({message:"Internal server error!"},{status:500});
    }
}