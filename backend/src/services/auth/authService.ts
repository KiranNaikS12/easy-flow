import { inject, injectable } from "inversify";
import { IAuthService } from "./IAuthService";
import { BaseAuthDetails } from "../../types/auth/authTypes";
import { IUser } from "../../types/user/userTypes";
import bcrypt from "bcryptjs";
import { IAuthRepository } from "../../repositories/auth/IAuthRepository";

@injectable()
export class AuthService implements IAuthService {
    constructor(
        @inject('AuthRepository') private AuthRepository: IAuthRepository
    ){
        
    }

    async initiateRegistration(userDetails: BaseAuthDetails): Promise<IUser> {

        const existingEmailByUser = await this.AuthRepository.findByEmail(userDetails.email)
        
        if(existingEmailByUser) {
            throw new Error('User with this email already exists')
        }

        const hashPasswrod = await bcrypt.hash(userDetails.password, 10);

        console.log('userDetails', userDetails)

        const user = await this.AuthRepository.create({
            email: userDetails.email,
            roleId: userDetails.roleId,
            password: hashPasswrod
        })

        return user;
    }
}