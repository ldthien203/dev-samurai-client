import { ENotificationType } from '@/constants/enum'
import { toast } from 'react-toastify'

export const openNotification = (type: ENotificationType, message: string) => {
  toast(message, {
    type: type,
  })
}
