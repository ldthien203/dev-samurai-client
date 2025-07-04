import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FcGoogle } from 'react-icons/fc'
import { FaMicrosoft } from 'react-icons/fa'
import Logo from '@/components/Logo'
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiUser,
  FiXCircle,
} from 'react-icons/fi'
import {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from '@/components/ui/form'
import { NavLink } from 'react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchema } from '@/lib/schemas'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [passwordStatus, setPasswordStatus] = useState({
    message: '8 or more characters',
    color: 'text-muted-foreground',
    icon: <FiXCircle />,
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      gmail: '',
      password: '',
    },
  })

  const checkPassword = (value: string) => {
    if (!value || value.length < 8) {
      return {
        message: '8 or more characters',
        color: 'text-muted-foreground',
        icon: <FiXCircle />,
      }
    }

    if (!/[a-z]/.test(value) || !/[A-Z]/.test(value)) {
      return {
        message: 'Uppercase and lowercase letters',
        color: 'text-muted-foreground',
        icon: <FiXCircle />,
      }
    }

    return {
      message: 'All requirements met',
      color: 'text-green-600',
      icon: <FiXCircle />,
    }
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <div className="min-h-screen flex-col justify-center items-start mt-10">
      <Logo />
      <Card className="w-full max-w-xs min-w-xs text-left px-2 mt-5">
        <CardHeader>
          <CardTitle className="text-weight: 700 ">
            Create your account
          </CardTitle>
          <CardDescription>
            Please fill in the details to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <FiUser />
                        </span>
                        <Input
                          id="name"
                          type="text"
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
                name="gmail"
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
                    <FormLabel htmlFor="password">Password</FormLabel>
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
                          onChange={(e) => {
                            field.onChange(e)
                            setPasswordStatus(checkPassword(e.target.value))
                          }}
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
                    <FormDescription>
                      <span
                        className={`flex items-center gap-2 text-sm text-gray-500 ${passwordStatus.color}`}
                      >
                        {passwordStatus.icon}
                        {passwordStatus.message}
                      </span>
                    </FormDescription>
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
                Create account
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
          Already have an account?
          <span className="ml-2">
            <NavLink to="/auth/sign-in" className="underline font-medium">
              Sign in
            </NavLink>
          </span>
        </CardDescription>
      </Card>
      <CardDescription className="w-full max-w-xs min-w-xs text-left text-xs pt-5 px-2">
        By signing up, you agree to our{' '}
        <span className="underline font-small text-black">Terms of Use</span>{' '}
        and{' '}
        <span className="underline font-small text-black">Privacy Policy</span>.
        Need help?{' '}
        <span className="underline font-small text-black">Get in touch.</span>
      </CardDescription>
    </div>
  )
}

export default Register
