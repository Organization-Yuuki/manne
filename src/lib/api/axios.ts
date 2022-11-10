import axios, { AxiosInstance } from 'axios'

import { CONST_DATA } from '../../const'
import { logger } from '../utils/logger'

/*
 * axiosインスタンス
 */
export const apiInstance: AxiosInstance = axios.create({
  // NOTE: 仮
  baseURL: CONST_DATA.BASE_URL,
})

/*
 * リクエスト時リクエストパラメーターログ出力
 */
apiInstance.interceptors.request.use((config) => {
  logger('request param', config.params)
  return config
})
