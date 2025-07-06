import axios from 'axios'
import { TUser } from '@/types/type'

export const fetchMe = async (token: string): Promise<TUser> => {
  const res = await axios.get('http://localhost:4000/api/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return res.data.data
}
