import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IOwnerService } from "../../services/onwer/manageOwnerService/IOwnerService";
import { HTTPStatusCode } from "../../utils/httpStatusCode";
import { CustomMessages } from "../../utils/customMessage";



@injectable()
export class ManageOwnerController {
    constructor(
        @inject("OwnerService") private ownerService: IOwnerService
    ) {}

    async setupAccount(req: Request, res: Response) : Promise<void> {
         const { ownerId, ...ownerDetails} = req.body;

         const owner = await this.ownerService.setupAccount(ownerId, ownerDetails);
          
         const { password, ...safeOwner } = owner.toObject();

         res.status(HTTPStatusCode.CREATED).json({
            message: CustomMessages.ACCOUNT_CREATION_SUCCESSFULL,
            user: safeOwner
         })
        
    }
}