import { inject, injectable } from "inversify";
import { IAuthService } from "./IAuthService";
import { BaseAuthDetails, Role } from "../../types/auth/authTypes";
import { IOwner } from "../../types/users/ownerTypes";
import { IAuthRepository } from "../../repositories/auth/IAuthRepository";
import hashPassword from "../../utils/hashPassword";
import bcrypt from "bcryptjs";
import { CustomError } from "../../utils/customError";
import { CustomMessages } from "../../utils/customMessage";
import { HTTPStatusCode } from "../../utils/httpStatusCode";

@injectable()
export class AuthService implements IAuthService {
    constructor(
        @inject('AuthRepository') private AuthRepository: IAuthRepository
    ){
        
    }

    async initiateRegistration(userDetails: BaseAuthDetails): Promise<IOwner> {

        const existingEmailByUser = await this.AuthRepository.findByEmail(userDetails.email)
        
        if(existingEmailByUser) {
            throw new CustomError(HTTPStatusCode.CONFLICT, CustomMessages.USER_EXISTS)
        }

        const hashedPasswrod = await hashPassword(userDetails.password)

       
        const user = await this.AuthRepository.create({
            email: userDetails.email,
            roleId: Role.Head,
            isBlocked: false,
            password: hashedPasswrod,
            isProfileCompleted: false,
        })

        return user;
    }

    async initiateLogin(userDetails: BaseAuthDetails): Promise<IOwner> {
        const user = await this.AuthRepository.findByEmail(userDetails.email);
        
        if(!user) {
            throw new CustomError(HTTPStatusCode.NOT_FOUND, CustomMessages.USER_NOT_FOUND)
        }

        if(user.isBlocked) {
            throw new CustomError(HTTPStatusCode.CONFLICT, CustomMessages.USER_BLOCKED)
        }

        const isPasswordMatch = await bcrypt.compare(userDetails.password, user.password)

        if(!isPasswordMatch) {
            throw new CustomError(HTTPStatusCode.UNAUTHORIZED, CustomMessages.INVALID_CREDENTIALS)
        }

        return user;
    }
}