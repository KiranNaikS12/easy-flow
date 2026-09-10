import { inject, injectable } from "inversify";
import { BaseRepository } from "../base/baseRepository";
import { IClient } from "../../types/users/clientTypes";
import { IClientRepository } from "./IClientRepository";
import { Model } from "mongoose";



@injectable()
export class ClientRepository extends BaseRepository<IClient> implements IClientRepository {
    constructor(
        @inject('ClientModel') private clientModel: Model<IClient>
    ) {
       super(clientModel)
    }

    async findByEmail(email: string): Promise<IClient | null> {
        return  this.clientModel.findOne({email}).exec()
    }
}