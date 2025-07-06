import React from 'react'
import { Input } from '@/components/ui/input'
import { FiUser } from 'react-icons/fi'
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from '@/components/ui/form'
import { Control, FieldValues } from 'react-hook-form'

type TProps = {
  control: Control<FieldValues>
}

const NameField = ({ control }: TProps) => {
  return (
    <FormField
      control={control}
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
  )
}

export default NameField
