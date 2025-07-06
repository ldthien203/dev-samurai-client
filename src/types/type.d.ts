import { signUpSchema, signInSchema } from '@/lib/schemas'

export type TSignUpInput = z.infer<typeof signUpSchema>
export type TSignInInput = z.infer<typeof signInSchema>

export type TUser = {
  email: string
  name: string
}

export type TSignInResponse = {accessToken: string, refreshToken: string}

export type TCommonResponse<T> = {res: string, message: string, data: T}