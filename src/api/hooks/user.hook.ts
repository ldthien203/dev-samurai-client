import { useMutation } from "@tanstack/react-query"
import { signIn } from "../services/user.service"
import { USER_API_URL } from "../urls/user.url"

export const useSignIn = () => {
    return useMutation({
        mutationFn: signIn,
        mutationKey: [USER_API_URL.SIGN_IN]
    })
}