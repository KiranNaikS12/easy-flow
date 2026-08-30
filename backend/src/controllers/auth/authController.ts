import { inject, injectable } from "inversify";
import { IAuthService } from "../../services/auth/IAuthService";
import { Request, Response } from "express";
import { IJWTService } from "../../services/jwt/IJWTService";
import { setAuthCookie } from "../../utils/setCookie";
import { CustomError } from "../../utils/customError";
import { CustomMessages } from "../../utils/customMessage";
import { HTTPStatusCode } from "../../utils/httpStatusCode";

@injectable()
export class AuthController {
  constructor(
    @inject("AuthService") private authService: IAuthService,
    @inject("JWTService") private JWTService: IJWTService,
  ) {}

  async register(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.authService.initiateRegistration(req.body);

      // Generate jsonweb token
      const token = this.JWTService.generateAccessToken(
        user._id.toString(),
        user.roleId,
      );

      setAuthCookie(res, token);

      const { password, ...safeUser } = user.toObject();

      res.status(HTTPStatusCode.CREATED).json({
        message: CustomMessages.REGISTERED,
        user: safeUser,
      });
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.statusCode).json({
          message: error.message,
        });
        return;
      }
      res.status(HTTPStatusCode.INTERNAL_SERVER_ERROR).json({
        message: CustomMessages.SERVER_ERROR,
      });
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.authService.initiateLogin(req.body);

      const token = this.JWTService.generateAccessToken(
        user._id.toString(),
        user.roleId,
      );

      setAuthCookie(res, token);

      res.status(HTTPStatusCode.OK).json({
        message: CustomMessages.LOGEDIN,
        user: user.toObject(),
      });
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.statusCode).json({
          message: error.message,
        });
        return;
      }

      res.status(HTTPStatusCode.INTERNAL_SERVER_ERROR).json({
        message: CustomMessages.SERVER_ERROR,
      });
    }
  }

  async logout(req: Request, res: Response): Promise<void> {
    try {
      res.clearCookie("access-token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      res.status(HTTPStatusCode.OK).json({ messsage: CustomMessages.LOGOUT });
    } catch (error) {
      if (error instanceof Error) {
        res.status(HTTPStatusCode.BAD_REQUEST).json({
          message: CustomMessages.LOGOUT_ERROR,
        });
        return;
      }

      res.status(HTTPStatusCode.INTERNAL_SERVER_ERROR).json({
        message: CustomMessages.SERVER_ERROR,
      });
    }
  }
}
