import { BaseAuth } from "../auth/authTypes";


export interface IUser extends BaseAuth {
    isProfileCompleted: boolean;
}