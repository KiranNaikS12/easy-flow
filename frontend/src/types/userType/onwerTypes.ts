import type { Role } from "../authTypes/roleTypes";

// user data 
export interface UserData {
    _id: string;
    email: string;
    roleId: Role;
    isProfileCompleted: boolean;
    institutionName: string;
    institutionType: string;
    phone: string;
    description: string;
    services: string[];
    createdAt: Date | null;
    updatedAt: Date | null;
}