import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken';

export const getDataFromToke = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || "";
        const decodedToken: any  = jwt.verify(token, process.env.TOKEN_SECRET!);
        return decodedToken;
    } catch (error: any) {
        console.log("error occur while getting user " + error.message);
        throw new Error("Error occur while getting user " + error.message);
    }
}