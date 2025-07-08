import { useEffect } from 'react'
import { useFetchMe } from '@/api/hooks/user.hook'
import { ROOT_PATH } from '@/constants/path'
import { useNavigate } from 'react-router'
import { useQueryClient } from '@tanstack/react-query'

const MeFetcher = ({ token }: { token: string }) => {
  const query = useFetchMe(token)
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  useEffect(() => {
    if (query.data) {
      localStorage.setItem('user', JSON.stringify(query.data))
    }
    if (query.error) {
      localStorage.removeItem('user')
      queryClient.removeQueries({ queryKey: ['me'] })
      navigate(ROOT_PATH.SIGN_IN)
    }
  }, [query.data, query.error])

  return null
}

export default MeFetcher
