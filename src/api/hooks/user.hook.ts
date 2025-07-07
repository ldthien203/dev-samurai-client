import { useMutation, useQuery } from '@tanstack/react-query'
import {
  postSignUp,
  postSignIn,
  postLogout,
  getFetchMe,
} from '../services/user.service'
import { USER_API_URL } from '../urls/user.url'
import { useAuth } from '@/hooks/useAuth'

export const useSignUp = () => {
  return useMutation({
    mutationFn: postSignUp,
    mutationKey: [USER_API_URL.SIGN_UP],
  })
}

export const useSignIn = () => {
  const { login } = useAuth()

  return useMutation({
    mutationFn: postSignIn,
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

export const useLogout = () => {
  const { logout } = useAuth()

  return useMutation({
    mutationFn: postLogout,
    mutationKey: [USER_API_URL.LOGOUT],
    onSuccess: () => logout(),
  })
}

export const useFetchMe = (token: string) => {
  return useQuery({
    queryFn: () => getFetchMe(token!).then((res) => res.data),
    queryKey: [USER_API_URL.ME],
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  })
}
