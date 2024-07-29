import { dbConnect } from "@/app/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request = NextRequest) {
    try{
        const { email, password } = await request.json();
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
        }
        if(user.password !== password){
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
        }
        return NextResponse.json(user, { status: 200 });
    }
    catch(error){
        console.log("Error in login", error.message);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}