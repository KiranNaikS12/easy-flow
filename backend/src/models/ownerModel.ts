import mongoose, { Schema } from "mongoose";
import { IOwner } from "../types/users/ownerTypes";
import { Role } from "../types/auth/authTypes";


const authSchema = new Schema<IOwner>({
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
    },
    isProfileCompleted: {
        type: Boolean,
        default: false,
    },
    institutionName: {
        type: String,
        unique: true
    },
    institutionType: {
        type: String,
    },
    phone: {
        type: String,
    },
    description: {
       type: String,
    },
    services: {
        type: [String],
    }
}, {
    timestamps: true
})

const Auth = mongoose.model('Owner', authSchema)
export default Auth;