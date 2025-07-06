import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { FiLock, FiEye, FiEyeOff, FiXCircle } from 'react-icons/fi'
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from '@/components/ui/form'

import { Control, FieldValues } from 'react-hook-form'

type TProps = {
  control: Control<FieldValues>
}

const RegisterPasswordField = ({ control }: TProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [passwordStatus, setPasswordStatus] = useState({
    message: '8 or more characters',
    color: 'text-muted-foreground',
    icon: <FiXCircle />,
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

  return (
    <FormField
      control={control}
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
                aria-label={showPassword ? 'Hide password' : 'Show password'}
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
  )
}

export default RegisterPasswordField
