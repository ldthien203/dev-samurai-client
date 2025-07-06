import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from '@/components/ui/form'
import Logo from '@/components/Logo'
import { Input } from '@/components/ui/input'
import { FcGoogle } from 'react-icons/fc'
import { FaMicrosoft } from 'react-icons/fa'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import { NavLink, useNavigate } from 'react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signInSchema } from '@/lib/schemas'
import { TSignInInput } from '@/types/type'
import useLogin from '@/hooks/useLogin'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { mutate: signIn } = useLogin()
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
    <div className="min-h-screen flex-col justify-center items-start mt-10">
      <Logo />
      <Card className="w-full max-w-xs min-w-xs text-left px-2 mt-5">
        <CardHeader>
          <CardTitle className="text-weight: 700">
            Sign in to your account
          </CardTitle>
          <CardDescription>
            Welcome back! Please sign in to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <FiMail />
                        </span>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel htmlFor="password">
                      Password
                      <NavLink
                        to="#"
                        className="ml-auto inline-block font-normal text-sm underline-offset-4 hover:underline text-black underline"
                      >
                        Forgot password?
                      </NavLink>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <FiLock />
                        </span>
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          required
                          className="pl-10"
                          {...field}
                        />
                        <span
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                          onClick={() => setShowPassword((prev) => !prev)}
                          tabIndex={0}
                          role="button"
                          aria-label={
                            showPassword ? 'Hide password' : 'Show password'
                          }
                        >
                          {showPassword ? <FiEyeOff /> : <FiEye />}
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant="default"
                size="lg"
                type="submit"
                className="w-full flex flex-wrap items-center gap-2 md:flex-row"
              >
                Sign In
              </Button>
            </form>
          </Form>
          <div className="flex items-center mt-6">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="mx-2 text-xs text-gray-500">Or continue with</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>
        </CardContent>
        <CardFooter className="flex w-full m-0 justify-between">
          <Button
            variant="outline"
            type="button"
            size="sm"
            className="w-47/100"
          >
            <FcGoogle /> Google
          </Button>
          <Button
            variant="outline"
            type="button"
            size="sm"
            className="w-47/100"
          >
            <FaMicrosoft /> Microsoft
          </Button>
        </CardFooter>
        <CardDescription className="text-center">
          Don't have an account?
          <span className="ml-2">
            <NavLink to="/auth/sign-up" className="underline font-medium">
              Sign up
            </NavLink>
          </span>
        </CardDescription>
      </Card>
    </div>
  )
}

export default Login
