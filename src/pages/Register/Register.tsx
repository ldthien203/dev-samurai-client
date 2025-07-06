import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Logo from '@/components/Logo'

import { Link, NavLink } from 'react-router'

import RegisterForm from './components/RegisterForm'
import SocialLoginButton from '@/components/SocialLoginButton/SocialLoginButton'

const Register = () => {
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
          <RegisterForm />
          <div className="flex items-center mt-6">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="mx-2 text-xs text-gray-500">Or continue with</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>
        </CardContent>
        <CardFooter className="flex w-full m-0 justify-between">
          <SocialLoginButton />
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
        <span className="underline font-small text-black">
          <Link to="#">Terms of Use</Link>
        </span>{' '}
        and{' '}
        <span className="underline font-small text-black">
          <Link to="#">Privacy Policy</Link>
        </span>
        . Need help?{' '}
        <span className="underline font-small text-black">
          <Link to="#">Get in touch.</Link>
        </span>
      </CardDescription>
    </div>
  )
}

export default Register
