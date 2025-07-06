import ENV from '@/configs/app.config'
import axios from 'axios'

const AxiosInstance = axios.create({
  baseURL: ENV.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// AxiosInstance.interceptors.request.use((config) => {
//   return config
// })

// AxiosInstance.interceptors.response.use((config) => {
//   return config
// })

export default AxiosInstance
