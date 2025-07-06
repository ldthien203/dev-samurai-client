import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useNavigate } from 'react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signInSchema } from '@/lib/schemas'
import { TSignInInput } from '@/types/type'
import useLogin from '@/hooks/useLogin'
import EmailField from '../../../components/FormFields/EmailField'
import LoginPasswordField from '../../../components/FormFields/LoginPasswordField'
import { useSignIn } from '@/api/hooks/user.hook'

const LoginForm = () => {
  const { mutate: signIn } = useSignIn()
  const navigate = useNavigate()

  const form = useForm<TSignInInput>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: TSignInInput) => {
    signIn(data, {
      onSuccess: () => {
        setTimeout(() => navigate('/'), 1000)
      },
      onError: (error: unknown) => {
        if (error instanceof Error) {
          console.error('Register error:', error.message)
        } else {
          console.error('Unknown error', error)
        }
      },
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <EmailField control={form.control} />
        <LoginPasswordField control={form.control} />
        <Button
          variant="default"
          size="lg"
          type="submit"
          className="w-full flex flex-wrap items-center gap-2 md:flex-row"
          data-testid="login-btn"
        >
          Sign In
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
