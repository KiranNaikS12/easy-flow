import { BaseAuth } from "../auth/authTypes";


export interface IOwner extends BaseAuth {
    isProfileCompleted: boolean;
    institutionName: string;
    institutionType: string;
    phone: string;
    description: string;
    services: string[];
}