import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  gmail: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z
    .string()
    .min(8, '8 or more characters')
    .regex(/[A-Z]/, 'Uppercase and lowercase letters'),
})

export { formSchema }
