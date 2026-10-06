import type { RegisterClientFormData } from "../../types/userType/clientTypes"
import { apiClient } from "../client"


type APIResponse = {
    message: string
}

export const registerClient = async (
    data: RegisterClientFormData
): Promise<APIResponse> => {

    return apiClient<APIResponse>("/owner/client", {
        method: "POST",
        body: JSON.stringify(data)
    })
}