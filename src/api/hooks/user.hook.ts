import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchMe, signIn, signUp } from '../services/user.service'
import { USER_API_URL } from '../urls/user.url'
import { useAuth } from '@/hooks/useAuth'

export const useSignIn = () => {
  const { login } = useAuth()

  return useMutation({
    mutationFn: signIn,
    mutationKey: [USER_API_URL.SIGN_IN],
    onSuccess: (res) => {
      const { accessToken } = res.data
      if (!accessToken || typeof accessToken !== 'string') {
        console.error('No suitable accessToken:', res.message)
        return
      }
      login(accessToken)
    },
  })
}

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
    mutationKey: [USER_API_URL.SIGN_UP],
  })
}

export const useFetchMe = (token: string) => {
  return useQuery({
    queryFn: () => fetchMe(token!),
    queryKey: [USER_API_URL.ME],
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  })
}
