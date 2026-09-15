import type { Role } from "../authTypes/roleTypes";

// user data 
export interface UserData {
    _id:string;
    email: string;
    roleId: Role,
    isProfileCompleted: boolean;
    createdAt:Date | null;
    updatedAt: Date | null;
}