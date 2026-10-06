import { useMutation } from "@tanstack/react-query"
import { registerClient } from "../../api/admin/registerClientApi"


export const useCreateClient = () => {
    return useMutation({
        mutationFn: registerClient
    })
}