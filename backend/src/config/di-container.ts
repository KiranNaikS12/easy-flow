import { Container } from "inversify";
import mongoose  from "mongoose";
import { IOwner } from "../types/users/ownerTypes";
import AuthModel from '../models/ownerModel'
import { IAuthRepository } from "../repositories/auth/IAuthRepository";
import { AuthRepository } from "../repositories/auth/authRepository";
import { IAuthService } from "../services/auth/IAuthService";
import { AuthService } from "../services/auth/authService";
import { AuthController } from "../controllers/auth/authController";
import { IJWTService } from "../services/jwt/IJWTService";
import { JWTService } from "../services/jwt/JWTService";
import {IClient} from '../types/users/clientTypes';
import ClientModel from '../models/clientModel'
import { ManageClientController } from "../controllers/owner/manageClientController";
import { IClientService } from "../services/onwer/manageClientService/IClientService";
import { ClientService } from "../services/onwer/manageClientService/clientService";
import { IClientRepository } from "../repositories/client/IClientRepository";
import { ClientRepository } from "../repositories/client/clientRepository";
import { IOwnerRepository } from "../repositories/owner/IOwnerRepository";
import { OwnerRepository } from "../repositories/owner/ownerRepository";
import { IOwnerService } from "../services/onwer/manageOwnerService/IOwnerService";
import { OwnerService } from "../services/onwer/manageOwnerService/ownerService";
import { ManageOwnerController } from "../controllers/owner/manageOwnerController";

const container = new Container();

//Models
container.bind<mongoose.Model<IOwner>>('OwnerModel').toConstantValue(AuthModel);
container.bind<mongoose.Model<IClient>>('ClientModel').toConstantValue(ClientModel)

//Repositories
container.bind<IAuthRepository>('AuthRepository').to(AuthRepository);
container.bind<IClientRepository>('ClientRepository').to(ClientRepository);
container.bind<IOwnerRepository>('OwnerRepository').to(OwnerRepository);

//Services
container.bind<IAuthService>('AuthService').to(AuthService);
container.bind<IJWTService>('JWTService').to(JWTService);
container.bind<IClientService>('ClientService').to(ClientService);
container.bind<IOwnerService>('OwnerService').to(OwnerService)

//Controllers
container.bind<AuthController>('AuthController').to(AuthController);
container.bind<ManageClientController>('ManageClientController').to(ManageClientController);
container.bind<ManageOwnerController>('ManageOwnerController').to(ManageOwnerController)

export default container;
