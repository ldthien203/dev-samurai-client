import { useState } from 'react'
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import { NavLink } from 'react-router'
import { Control, FieldValues } from 'react-hook-form'

type TProps = {
  control: Control<FieldValues>
}

const PasswordField = ({ control }: TProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormField
      control={control}
      name="password"
      render={({ field }) => (
        <FormItem className="mb-5">
          <FormLabel htmlFor="password">
            Password
            <NavLink
              to="#"
              className="ml-auto inline-block font-normal text-sm underline-offset-4 hover:underline text-black dark:text-white underline"
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
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default PasswordField
