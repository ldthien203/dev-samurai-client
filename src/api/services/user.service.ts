import { TCommonResponse, TSignInInput, TSignInResponse } from '@/types/type'
import AxiosInstance from '../axios'
import { USER_API_URL } from '../urls/user.url'

export const signIn = (
  payload: TSignInInput
): Promise<TCommonResponse<TSignInResponse>> => {
  return AxiosInstance.post(USER_API_URL.SIGN_IN.uri, payload, {
    withCredentials: true,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err))
}
