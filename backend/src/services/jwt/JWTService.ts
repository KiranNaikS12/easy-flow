import { Role } from "../../types/auth/authTypes";
import jwt from "jsonwebtoken";
import { JWTPayload } from "../../types/auth/jwtTypes";
import { IJWTService } from "./IJWTService";


export class JWTService implements IJWTService {
    generateAccessToken(userId: string, roleId: Role): string {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }

        const token = jwt.sign({userId, roleId} as JWTPayload, process.env.JWT_SECRET, {
            expiresIn: '3d'
        })

        return token;
    }
}
