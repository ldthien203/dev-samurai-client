import { jwtDecode } from 'jwt-decode'

type TJwtPayload = {
  id: number
  name: string
  email: string
}

const decodeToken = (token: string): TJwtPayload => {
  return jwtDecode(token)
}

export default decodeToken
