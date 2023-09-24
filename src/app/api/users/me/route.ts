import {getDataFromToke} from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/model/userModel";
import {connect} from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest){
    try {
        const userId = await getDataFromToke(request);
        const user = await User.findOne({_id: userId.id}).select("-password");
        return NextResponse.json({
            message: "User data got successfully",
            data: user,
        });
    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 400})
    }
}