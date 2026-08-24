import { Model, Document } from 'mongoose'
import { IUser } from "../../types/user/userTypes";
import { BaseRepository } from "../base/baseRepository";
import { IAuthRepository } from "./IAuthRepository";
import { injectable, inject } from 'inversify';


@injectable()
export class AuthRepository extends BaseRepository<IUser> implements IAuthRepository {

    constructor (
        @inject('AuthModel') private authModel: Model<IUser>
    ) {
        super(authModel)
        this.authModel = authModel
    }


    async findByEmail(email: string) : Promise<IUser | null> {
        return await this.authModel.findOne({email}).exec();
    }
}