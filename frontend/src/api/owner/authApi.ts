import  { type signupFormData } from "../../types/authTypes/baseAuthType";
import type { UserData } from "../../types/userType/onwerTypes";
import { apiClient } from "../client";

export type SignupResponse = {
    user: UserData;
    message: string;
};

export const signup = async (
    data: signupFormData
): Promise<SignupResponse> => {

    return apiClient<SignupResponse>("/auth/register", {
        method: "POST",
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    });
};