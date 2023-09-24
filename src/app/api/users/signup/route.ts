import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();


export async function POST(request: NextRequest) {
    try {
        const bodyRequest = await request.json();
        const { username, email, password } = bodyRequest;
        console.log(bodyRequest);

        // check user is exist
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return NextResponse.json({ error: "User is already exists" }, { status: 400 })
        }

        // pssword hashing
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        // create new user
        const newUser = new User({
            username,
            email,
            password: hashPassword,
        })

        // save user
        const saveUser = await newUser.save();
        console.log(saveUser);

        // return response
        return NextResponse.json({
            message: "New user created successfully",
            success: true,
            user: newUser
        },
        {
            status: 200
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}