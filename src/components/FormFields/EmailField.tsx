import { Input } from '@/components/ui/input'
import { FiMail } from 'react-icons/fi'
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

const EmailField = ({ control }: TProps) => {
  return (
    <FormField
      control={control}
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
  )
}

export default EmailField
