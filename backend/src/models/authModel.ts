import mongoose, { Schema } from "mongoose";
import { IUser } from "../types/users/userTypes";
import { Role } from "../types/auth/authTypes";


const authSchema = new Schema<IUser>({
    email: {
        type:String,
        required: true,
        unique: true
    },
    roleId: {
        type: String,
        enum: Object.values(Role),
        default: Role.Head
    },
    isBlocked: {
        type: Boolean,
        deafult: false,
    },
    password:{
        type:String,
        required:true,
        select: false,
    },
}, {
    timestamps: true
})

const Auth = mongoose.model('User', authSchema)
export default Auth;