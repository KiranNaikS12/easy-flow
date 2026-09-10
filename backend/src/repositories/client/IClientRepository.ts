import { IClient } from "../../types/users/clientTypes";
import { BaseRepository } from "../base/baseRepository";


export interface IClientRepository extends BaseRepository<IClient> {
    findByEmail(email: string) : Promise<IClient | null>
}