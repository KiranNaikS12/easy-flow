import { inject, injectable } from "inversify";
import { IClientService } from "./IClientService";
import { IClient } from "../../../types/users/clientTypes";
import { CustomError } from "../../../utils/customError";
import { HTTPStatusCode } from "../../../utils/httpStatusCode";
import { CustomMessages } from "../../../utils/customMessage";
import { IClientRepository } from "../../../repositories/client/IClientRepository";
import { Role } from "../../../types/auth/authTypes";



@injectable()
export class ClientService implements IClientService {
    constructor(
        @inject('ClientRepository') private clientRepository: IClientRepository
    ) {}

    async registerClient(clientDetails: IClient): Promise<IClient> {
        
        const existingClient = await this.clientRepository.findByEmail(clientDetails.email);

        if(existingClient){
            throw new CustomError(HTTPStatusCode.CONFLICT, CustomMessages.USER_EXISTS)
        }

        const client = await this.clientRepository.create({
            fullName: clientDetails.fullName,
            email: clientDetails.email,
            phone: clientDetails.phone,
            dob: clientDetails.dob,
            category: clientDetails.category,
            division: clientDetails.division.toUpperCase(),
            parentContact: clientDetails.parentContact,
            roleId: Role.Client,
            isBlocked: false
        })

        return client;
    }
}