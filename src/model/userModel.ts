import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: [true, "Please provide the username"],
        unique: true,
        trim: true
    },
    email:{
        type:String,
        require: [true,"Please provide the email"],
        unique: true,
        trim: true
    },
    password:{
        type: String,
        require: [true,"Please provide the email"],
        trim: true
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;