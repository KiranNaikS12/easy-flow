import { useMutation } from "@tanstack/react-query";
import { signIn, signup } from "../../api/admin/authApi";

export const useSignup = () => {
    return useMutation({
        mutationFn: signup
    });
};

export const useSignIn = () => {
    return useMutation({
        mutationFn: signIn
    })
}