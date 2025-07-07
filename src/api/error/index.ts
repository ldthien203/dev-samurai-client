import { ENotificationType } from '@/constants/enum'
import { openNotification } from '@/lib/toaster'
import { TCommonResponse } from '@/types/type'
import { AxiosError } from 'axios'

export const handleError = (error: AxiosError<TCommonResponse<unknown>>) => {
  console.log(error)
  if (error?.response?.data?.message) {
    openNotification(ENotificationType.ERROR, error.response.data.message)
  } else if (error.message) {
    openNotification(ENotificationType.ERROR, error.message)
  }

  throw error
}
