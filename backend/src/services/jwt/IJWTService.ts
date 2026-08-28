import { Role } from "../../types/auth/authTypes";

export interface IJWTService {
    generateAccessToken(userId: string, roleId: Role): string;
}