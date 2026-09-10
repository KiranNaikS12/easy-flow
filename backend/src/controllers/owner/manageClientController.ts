import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { IClientService } from "../../services/onwer/manageClientService/IClientService";
import { HTTPStatusCode } from "../../utils/httpStatusCode";
import { CustomMessages } from "../../utils/customMessage";


@injectable()
export class ManageClientController {
    constructor(
        @inject("ClientService") private clientService: IClientService
    ) {}

    async registerClient(req: Request, res:Response) : Promise<void> {
       await this.clientService.registerClient(req.body);

       res.status(HTTPStatusCode.CREATED).json({
          message: CustomMessages.REGISTERED
       })
    }
}