import { Response } from "express";
import { BaseAuthDetails } from "../../types/auth/authTypes";
import { IUser } from "../../types/user/userTypes";


export interface IAuthService {
    initiateRegistration(userDetails: BaseAuthDetails): Promise<IUser>
}