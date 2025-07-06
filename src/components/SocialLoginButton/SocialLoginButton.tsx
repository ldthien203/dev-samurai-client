import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc'
import { FaMicrosoft } from 'react-icons/fa'

const SocialLoginButton = () => {
  return (
    <>
      <Button
        variant="outline"
        type="button"
        size="sm"
        className="w-47/100 cursor-pointer"
      >
        <FcGoogle /> Google
      </Button>
      <Button
        variant="outline"
        type="button"
        size="sm"
        className="w-47/100 cursor-pointer"
      >
        <FaMicrosoft /> Microsoft
      </Button>
    </>
  )
}

export default SocialLoginButton
