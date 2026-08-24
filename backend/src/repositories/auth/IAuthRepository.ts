import { IUser } from "../../types/user/userTypes";
import { IBaseRepository } from "../base/IBaseRepository";


export interface IAuthRepository extends IBaseRepository<IUser> {
   findByEmail(email: string) : Promise<IUser | null>
}