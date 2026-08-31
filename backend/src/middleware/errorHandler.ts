import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/customError";
import { HTTPStatusCode } from "../utils/httpStatusCode";
import { CustomMessages } from "../utils/customMessage";



export const errorHandler = (error: unknown, req: Request, res: Response, next: NextFunction): void => {
    if(error instanceof CustomError) {
      res.status(error.statusCode).json({
      message: error.message,
    });
    return;
    }

    res.status(HTTPStatusCode.INTERNAL_SERVER_ERROR).json({
      message: CustomMessages.SERVER_ERROR
    })
}