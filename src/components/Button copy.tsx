import React from 'react'
import Button2 from '@/components/Button'

type TButtonProps = {
  children: string
  name: string
}

const Button = ({ children }: TButtonProps) => {
  return <Button2 name="">{children}</Button2>
}

export default Button
