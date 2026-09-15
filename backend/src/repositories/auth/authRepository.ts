import { Model } from 'mongoose'
import { BaseRepository } from "../base/baseRepository";
import { IAuthRepository } from "./IAuthRepository";
import { injectable, inject } from 'inversify';
import { IOwner } from '../../types/users/ownerTypes';


@injectable()
export class AuthRepository extends BaseRepository<IOwner> implements IAuthRepository {

    constructor (
        @inject('OwnerModel') private ownerModel: Model<IOwner>
    ) {
        super(ownerModel)
    }


    async findByEmail(email: string) : Promise<IOwner | null> {
        return await this.ownerModel.findOne({email}).exec();
    }
}