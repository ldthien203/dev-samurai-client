import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Logo from '@/components/Logo'
import { NavLink } from 'react-router'
import LoginForm from './components/LoginForm'
import SocialLoginButton from '../../components/SocialLoginButton/SocialLoginButton'

const Login = () => {
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
          <LoginForm />
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
