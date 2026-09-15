import { IOwner } from "../../../types/users/ownerTypes";

export interface IOwnerService {
    setupAccount(ownerId: string, ownerDetails: Partial<IOwner>) : Promise<IOwner>
}