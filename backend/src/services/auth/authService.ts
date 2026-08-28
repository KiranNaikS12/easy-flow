import { inject, injectable } from "inversify";
import { IAuthService } from "./IAuthService";
import { BaseAuthDetails } from "../../types/auth/authTypes";
import { IUser } from "../../types/user/userTypes";
import { IAuthRepository } from "../../repositories/auth/IAuthRepository";
import hashPassword from "../../utils/hashPassword";
import bcrypt from "bcryptjs";
import { CustomError } from "../../utils/customError";
import { CustomMessages } from "../../utils/customMessage";

@injectable()
export class AuthService implements IAuthService {
    constructor(
        @inject('AuthRepository') private AuthRepository: IAuthRepository
    ){
        
    }

    async initiateRegistration(userDetails: BaseAuthDetails): Promise<IUser> {

        const existingEmailByUser = await this.AuthRepository.findByEmail(userDetails.email)
        
        if(existingEmailByUser) {
            throw new CustomError(403, CustomMessages.USER_EXISTS)
        }

        const hashedPasswrod = await hashPassword(userDetails.password)

        const user = await this.AuthRepository.create({
            email: userDetails.email,
            roleId: userDetails.roleId,
            isBlocked: false,
            password: hashedPasswrod
        })

        return user;
    }

    async initiateLogin(userDetails: BaseAuthDetails): Promise<IUser> {
        const user = await this.AuthRepository.findByEmail(userDetails.email);
        
        if(!user) {
            throw new CustomError(404, CustomMessages.USER_NOT_FOUND)
        }

        if(user.isBlocked) {
            throw new CustomError(403, CustomMessages.USER_BLOCKED)
        }

        const isPasswordMatch = await bcrypt.compare(userDetails.password, user.password)

        if(!isPasswordMatch) {
            throw new CustomError(404, CustomMessages.INVALID_CREDENTIALS)
        }

        return user;
    }
}