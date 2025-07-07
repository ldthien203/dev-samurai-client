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

export const signIn = (
  payload: TSignInInput
): Promise<TCommonResponse<TSignInResponse>> => {
  return AxiosInstance.post(USER_API_URL.SIGN_IN.uri, payload, {
    withCredentials: true,
  })
    .then((res) => res.data)
    .catch((err) => console.error(err))
}

export const signUp = (
  payload: TSignUpInput
): Promise<TCommonResponse<TSignUpResponse>> => {
  return AxiosInstance.post(USER_API_URL.SIGN_UP.uri, payload)
    .then((res) => res.data)
    .catch((err) => console.error(err))
}

// export const fetchMe = (token: string): Promise<TCommonResponse<TUser>> => {
//   return AxiosInstance.get(USER_API_URL.ME.uri, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then((res) => res.data)
//     .catch((err) => {
//       console.error(err)
//     })
// }

export const fetchMe = (token: string): Promise<TUser> => {
  return AxiosInstance.get(USER_API_URL.ME.uri, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.data)
    .catch((err) => {
      console.error(err)
    })
}
