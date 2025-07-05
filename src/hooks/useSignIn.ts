import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { TSignInInput } from '@/types/type'
import { useAuth } from '@/contexts/AuthContext'

const useSignIn = () => {
  const { login } = useAuth()

  return useMutation({
    mutationFn: async (data: TSignInInput) => {
      const res = await axios.post(
        // `${VITE_API_URL}/auth/sign-up`,
        'http://localhost:4000/api/auth/sign-in',
        data
      )

      return res.data
    },
    onSuccess: (res) => {
      const { accessToken } = res.data
      if (!accessToken || typeof accessToken !== 'string') {
        console.error('No suitable accessToken:', res.message)
        return
      }
      login(accessToken)
    },
  })
}

export default useSignIn
