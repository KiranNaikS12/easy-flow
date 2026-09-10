import { Container } from "inversify";
import mongoose  from "mongoose";
import { IUser } from "../types/users/userTypes";
import AuthModel from '../models/authModel'
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

const container = new Container();

//Models
container.bind<mongoose.Model<IUser>>('AuthModel').toConstantValue(AuthModel);
container.bind<mongoose.Model<IClient>>('ClientModel').toConstantValue(ClientModel)

//Repositories
container.bind<IAuthRepository>('AuthRepository').to(AuthRepository);
container.bind<IClientRepository>('ClientRepository').to(ClientRepository)

//Services
container.bind<IAuthService>('AuthService').to(AuthService);
container.bind<IJWTService>('JWTService').to(JWTService);
container.bind<IClientService>('ClientService').to(ClientService)

//Controllers
container.bind<AuthController>('AuthController').to(AuthController);
container.bind<ManageClientController>('ManageClientController').to(ManageClientController);

export default container;