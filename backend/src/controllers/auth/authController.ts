import { inject, injectable } from "inversify";
import { IAuthService } from "../../services/auth/IAuthService";
import { Request, Response } from "express";

@injectable()
export class AuthController {
    constructor(
        @inject('AuthService') private authService: IAuthService 
    ) {}

    async register(req: Request, res:Response) : Promise<void> {
        try {
            const user = await this.authService.initiateRegistration(req.body);

            const { password, ...safeUser } = user.toObject()

            res.status(201).json({
                message: "User Registered Successfully",
                user: safeUser
            })

        } catch (error) {
            res.status(404).json({
                message: error instanceof Error
                ? error.message 
                : "Registration Failed"
            })
        }
    }
}