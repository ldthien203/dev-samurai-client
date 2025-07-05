import { signUpSchema, signInSchema } from '@/lib/schemas'

export type TSignUpInput = z.infer<typeof signUpSchema>
export type TSignInInput = z.infer<typeof signInSchema>
