import { TSignUpInput } from '@/types/type'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useRegister = () => {
  return useMutation({
    mutationFn: async (data: TSignUpInput) => {
      const res = await axios.post(
        // `${VITE_API_URL}/auth/sign-up`,
        'http://localhost:4000/api/auth/sign-up',
        data
      )
      return res.data
    },
  })
}

export default useRegister
