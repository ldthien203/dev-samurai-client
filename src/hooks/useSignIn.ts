import { TSignInInput } from '@/types/type'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useSignIn = () => {
  return useMutation({
    mutationFn: async (data: TSignInInput) => {
      const res = await axios.post(
        // `${VITE_API_URL}/auth/sign-up`,
        'http://localhost:4000/api/auth/sign-in',
        data
      )
      return res.data
    },
  })
}

export default useSignIn
