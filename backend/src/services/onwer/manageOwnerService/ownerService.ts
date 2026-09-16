import { inject, injectable } from "inversify";
import { IOwnerRepository } from "../../../repositories/owner/IOwnerRepository";
import { IOwner } from "../../../types/users/ownerTypes";
import { CustomError } from "../../../utils/customError";
import { HTTPStatusCode } from "../../../utils/httpStatusCode";
import { CustomMessages } from "../../../utils/customMessage";
import { IOwnerService } from "./IOwnerService";


@injectable()
export class OwnerService implements IOwnerService {
    constructor(
        @inject('OwnerRepository') private ownerRepository: IOwnerRepository
    ) {} 

    async setupAccount(ownerId: string, ownerDetails: Partial<IOwner>): Promise<IOwner> {
        
        const existingInstitution  = await this.ownerRepository.findOne({institutionName: ownerDetails.institutionName});

        if(existingInstitution) {
            throw new CustomError(HTTPStatusCode.CONFLICT, CustomMessages.INSTITUTION_EXISTS)
        } 
        
        const owner = await this.ownerRepository.findById(ownerId);

        if(!owner) {
            throw new CustomError(HTTPStatusCode.NOT_FOUND, CustomMessages.USER_NOT_FOUND)
        }

        const updatedDetails = {
            ...ownerDetails,
            isProfileCompleted: true
        }


        const updateOwner = await this.ownerRepository.update(ownerId, updatedDetails);
        

        if(!updateOwner) {
            throw new CustomError(HTTPStatusCode.NOT_FOUND, CustomMessages.USER_NOT_FOUND)
        }

        return updateOwner;

    }
}