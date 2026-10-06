import  { type signupFormData, type singInFormData } from "../../types/authTypes/baseAuthType";
import type { UserData } from "../../types/userType/onwerTypes";
import { apiClient } from "../client";

export type AuthResponse = {
    user: UserData;
    message: string;
};

export const signup = async (
    data: signupFormData
): Promise<AuthResponse> => {

    return apiClient<AuthResponse>("/auth/register", {
        method: "POST",
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    });
};

export const signIn = async (
    data: singInFormData
) : Promise<AuthResponse> => {

    return apiClient<AuthResponse>("/auth/login", {
        method:"POST",
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    });
}