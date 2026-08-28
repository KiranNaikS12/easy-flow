import { Response } from "express";


export const setAuthCookie = (res: Response, token: string): void => {
    res.cookie('access-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3 * 24 * 60 * 60 * 1000
    })
}