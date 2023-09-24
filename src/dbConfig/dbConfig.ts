import { log } from "console";
import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("Mongo DB connected");
        })
        connection.on("error",(error)=>{
            console.log("There is an error " + error);
            process.exit();
        })
    } catch (error) {
        console.log("Something went wrong!");
        console.log(error);
    }
}