import { NextFunction, Request, Response } from 'express'
import * as Yup from 'yup'
import { HTTPStatusCode } from '../utils/httpStatusCode'
import { CustomMessages } from '../utils/customMessage'

export const validate = (schema: Yup.ObjectSchema<any>) => {
   return async (
    req: Request,
    res: Response,
    next: NextFunction
   ) => {
    try {

        await schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        })

        next()

    } catch (error) {
        if(error instanceof Yup.ValidationError) {
            return res.status(HTTPStatusCode.BAD_REQUEST).json({
                message: CustomMessages.VALIDATION_ERROR,
                errors: error.errors
            })
        }
        next(error)
    }
    
   }
} 