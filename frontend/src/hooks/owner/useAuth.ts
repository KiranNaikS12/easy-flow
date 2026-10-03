import { useMutation } from "@tanstack/react-query";
import { signup } from "../../api/owner/authApi";

export const useSignup = () => {
    return useMutation({
        mutationFn: signup
    });
};