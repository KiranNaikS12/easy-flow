import { Response } from "express";
import { BaseAuthDetails } from "../../types/auth/authTypes";
import { IUser } from "../../types/users/userTypes";


export interface IAuthService {
    initiateRegistration(userDetails: BaseAuthDetails): Promise<IUser>
    initiateLogin(userDetails: BaseAuthDetails): Promise<IUser>
}