import { injectable, inject } from "inversify";
import { BaseRepository } from "../base/baseRepository";
import { IOwner } from "../../types/users/ownerTypes";
import { IOwnerRepository } from "./IOwnerRepository";
import { Model } from "mongoose";

@injectable()
export class OwnerRepository extends BaseRepository<IOwner> implements IOwnerRepository {
    constructor(
        @inject('OwnerModel') private ownerModel: Model<IOwner>
    ){
        super(ownerModel)
    }
}