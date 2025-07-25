import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signInSchema } from '@/lib/schemas'
import { TSignInInput } from '@/types/type'
import EmailField from '../../../components/FormFields/EmailField'
import LoginPasswordField from '../../../components/FormFields/LoginPasswordField'
import { useSignIn } from '@/api/hooks/user.hook'
import { useAuth } from '@/hooks/useAuth'

const LoginForm = () => {
  const { login } = useAuth()
  const { mutate: signInApi, isSuccess } = useSignIn()

  const form = useForm<TSignInInput>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: TSignInInput) => {
    signInApi(data, {
      onSuccess: (res) => {
        const { accessToken } = res.data
        if (!accessToken || typeof accessToken !== 'string') {
          console.error('No suitable accessToken:', res.message)
          return
        }
        login(accessToken)
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
          disabled={isSuccess}
          className="w-full flex flex-wrap items-center gap-2 md:flex-row cursor-pointer"
          data-testid="login-btn"
        >
          {isSuccess ? 'Signing in ... ' : 'Sign In'}
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
