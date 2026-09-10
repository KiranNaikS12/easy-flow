import { IClient } from "../../../types/users/clientTypes";


export interface IClientService {
    registerClient(clientDetails: IClient) : Promise<IClient>
}