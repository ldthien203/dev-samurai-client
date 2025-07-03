import React from 'react'

type TButtonProps = {
  children: string
  name: string
}

const Button2 = ({ children }: TButtonProps) => {
  return <button>{children}</button>
}

const Button = ({ children }: TButtonProps) => {
  return <Button2 name="">{children}</Button2>
}

export default Button
