import { NextFunction, Request, Response } from "express";
import jwt  from "jsonwebtoken";
import { HTTPStatusCode } from "../utils/httpStatusCode";
import { JWTPayload } from "../types/auth/jwtTypes";
import { CustomMessages } from "../utils/customMessage";

//Extending express's request interface using typescript declaration merging for user property
declare global {
    namespace Express {
        interface Request {
            user?: JWTPayload
        }
    }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {

    const token = req.cookies["access-token"]

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;
    req.user = decoded;
    next()


    } catch (error) {  
        if(error instanceof jwt.TokenExpiredError) {
            return res.status(HTTPStatusCode.UNAUTHORIZED).json({
                success: false,
                message: CustomMessages.TOKEN_EXPIRED,
            })
        }

        return res.status(HTTPStatusCode.UNAUTHORIZED).json({
            success: false,
            message: CustomMessages.INVALID_TOKEN,
        });
    }
}

export default authMiddleware;