import React from 'react'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useNavigate } from 'react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signUpSchema } from '@/lib/schemas'
import { useSignUp } from '@/api/hooks/user.hook'
import { TSignUpInput } from '@/types/type'
import NameField from '../../../components/FormFields/NameField'
import EmailField from '@/components/FormFields/EmailField'
import RegisterPasswordField from '@/components/FormFields/RegisterPasswordField'
import { ROOT_PATH } from '@/constants/path'

const RegisterForm = () => {
  const { mutate: signUp } = useSignUp()
  const navigate = useNavigate()

  const form = useForm<TSignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: TSignUpInput) => {
    signUp(data, {
      onSuccess: () => navigate(ROOT_PATH.SIGN_IN),

      onError: (error: unknown) => {
        if (error instanceof Error) {
          console.error('Register error', error.message)
        } else {
          console.error('Unknown error', error)
        }
      },
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <NameField control={form.control} />
        <EmailField control={form.control} />
        <RegisterPasswordField control={form.control} />
        <Button
          variant="default"
          size="lg"
          type="submit"
          className="w-full flex flex-wrap items-center gap-2 md:flex-row cursor-pointer"
          data-testid="register-btn"
        >
          Create account
        </Button>
      </form>
    </Form>
  )
}

export default RegisterForm
