import { useMutation, useQuery } from '@tanstack/react-query'
import {
  postSignUp,
  postSignIn,
  postLogout,
  getFetchMe,
} from '../services/user.service'
import { USER_API_URL } from '../urls/user.url'

export const useSignUp = () => {
  return useMutation({
    mutationFn: postSignUp,
    mutationKey: [USER_API_URL.SIGN_UP],
  })
}

export const useSignIn = () => {
  return useMutation({
    mutationFn: postSignIn,
    mutationKey: [USER_API_URL.SIGN_IN],
  })
}

export const useLogout = () => {
  return useMutation({
    mutationFn: postLogout,
    mutationKey: [USER_API_URL.LOGOUT],
  })
}

export const useFetchMe = (token: string) => {
  return useQuery({
    queryFn: () => getFetchMe(token!).then((res) => res.data),
    queryKey: [USER_API_URL.ME, token],
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  })
}
