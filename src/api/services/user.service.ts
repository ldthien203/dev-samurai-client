import {
  TCommonResponse,
  TSignInInput,
  TSignInResponse,
  TSignUpInput,
  TSignUpResponse,
  TUser,
} from '@/types/type'
import AxiosInstance from '../axios'
import { USER_API_URL } from '../urls/user.url'
import { handleError } from '../error'

export const postSignIn = (
  payload: TSignInInput
): Promise<TCommonResponse<TSignInResponse>> => {
  return AxiosInstance.post(USER_API_URL.SIGN_IN.uri, payload, {
    withCredentials: true,
  })
    .then((res) => res.data)
    .catch(handleError)
}

export const postSignUp = (
  payload: TSignUpInput
): Promise<TCommonResponse<TSignUpResponse>> => {
  return AxiosInstance.post(USER_API_URL.SIGN_UP.uri, payload)
    .then((res) => res.data)
    .catch(handleError)
}

export const postLogout = (): Promise<TCommonResponse<unknown>> => {
  return AxiosInstance.post(
    USER_API_URL.LOGOUT.uri,
    {},
    {
      withCredentials: true,
    }
  )
}

export const getFetchMe = (token: string): Promise<TCommonResponse<TUser>> => {
  return AxiosInstance.get(USER_API_URL.ME.uri, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.data)
    .catch(handleError)
}
