import { signUpSchema } from '@/lib/schemas'

export type TSignUpInput = z.infer<typeof signUpSchema>
