import { Container } from "inversify";
import mongoose  from "mongoose";
import { IUser } from "../types/user/userTypes";
import AuthModel from '../models/authModel'
import { IAuthRepository } from "../repositories/auth/IAuthRepository";
import { AuthRepository } from "../repositories/auth/authRepository";
import { IAuthService } from "../services/auth/IAuthService";
import { AuthService } from "../services/auth/authService";
import { AuthController } from "../controllers/auth/authController";


const container = new Container();

//Models
container.bind<mongoose.Model<IUser>>('AuthModel').toConstantValue(AuthModel);

//Repositories
container.bind<IAuthRepository>('AuthRepository').to(AuthRepository);

//Services
container.bind<IAuthService>('AuthService').to(AuthService);

//Controllers
container.bind<AuthController>('AuthController').to(AuthController)

export default container;