import { IOwner } from "../../types/users/ownerTypes";
import { IBaseRepository } from "../base/IBaseRepository";


export interface IAuthRepository extends IBaseRepository<IOwner> {
   findByEmail(email: string) : Promise<IOwner | null>
}