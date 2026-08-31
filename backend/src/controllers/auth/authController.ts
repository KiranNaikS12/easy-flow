import { inject, injectable } from "inversify";
import { IAuthService } from "../../services/auth/IAuthService";
import { Request, Response } from "express";
import { IJWTService } from "../../services/jwt/IJWTService";
import { setAuthCookie } from "../../utils/setCookie";
import { CustomMessages } from "../../utils/customMessage";
import { HTTPStatusCode } from "../../utils/httpStatusCode";
import { IUser } from "../../types/user/userTypes";

@injectable()
export class AuthController {
  constructor(
    @inject("AuthService") private authService: IAuthService,
    @inject("JWTService") private JWTService: IJWTService,
  ) {}

  private generateAuthToken = (user: IUser): string => {
    return this.JWTService.generateAccessToken(
      user._id.toString(),
      user.roleId
    )
  }


  async register(req: Request, res: Response): Promise<void> {
      const user = await this.authService.initiateRegistration(req.body);

      // Generate jsonweb token
      const token =  this.generateAuthToken(user)

      setAuthCookie(res, token);

      const { password, ...safeUser } = user.toObject();

      res.status(HTTPStatusCode.CREATED).json({
        message: CustomMessages.REGISTERED,
        user: safeUser,
      });
  }

  async login(req: Request, res: Response): Promise<void> {
      const user = await this.authService.initiateLogin(req.body);

      const token =  this.generateAuthToken(user)

      setAuthCookie(res, token);

      res.status(HTTPStatusCode.OK).json({
        message: CustomMessages.LOGEDIN,
        user: user.toObject(),
      });
  }

  async logout(req: Request, res: Response): Promise<void> {
  
      res.clearCookie("access-token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      res.status(HTTPStatusCode.OK).json({ messsage: CustomMessages.LOGOUT });

  }
}
