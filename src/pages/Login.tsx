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
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <Card className="w-full max-w-sm text-left">
        <CardHeader>
          <CardTitle className="text-weight: 700">
            Sign in to your account
          </CardTitle>
          <CardDescription>
            Welcome back! Please sign in to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FiMail />
                  </span>
                  <Input id="email" type="email" required className="pl-10" />
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-black underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FiLock />
                  </span>
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="pl-10"
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
              </div>
              <Button
                variant="default"
                size="lg"
                type="submit"
                className="w-full flex flex-wrap items-center gap-2 md:flex-row"
              >
                Sign In
              </Button>
            </div>
          </form>
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
            <a href="#" className="underline font-medium">
              Sign up
            </a>
          </span>
        </CardDescription>
      </Card>
    </>
  )
}

export default Login
