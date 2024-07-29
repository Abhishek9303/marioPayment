import { dbConnect } from "@/app/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request = NextRequest) {
  try {
    const { name, email, password } = await request.json();
    const user =await User.create({
      name,
      email,
      password,
      role: "user",
    });


    return NextResponse.json({success : true , data : user}, { status: 200 });
  } catch (error) {
    console.log("Error in POST", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

