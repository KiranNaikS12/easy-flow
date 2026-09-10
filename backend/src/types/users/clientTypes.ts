import mongoose, {Document} from "mongoose";
import { Role } from "../auth/authTypes";

export interface IClient  {
    _id: mongoose.Types.ObjectId;
    fullName: string;
    email: string;
    phone: string;
    dob: Date;
    category: string;
    division: string;
    parentContact: string;
    isBlocked: boolean;
    roleId: Role.Client
}