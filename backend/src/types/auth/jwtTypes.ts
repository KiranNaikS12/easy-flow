import { Role } from "./authTypes";


export interface JWTPayload {
    userId: string;
    roleId: Role;
}