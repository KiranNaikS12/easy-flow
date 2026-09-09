import { IUser } from "../../types/users/userTypes";
import { IBaseRepository } from "../base/IBaseRepository";


export interface IAuthRepository extends IBaseRepository<IUser> {
   findByEmail(email: string) : Promise<IUser | null>
}