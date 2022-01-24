
import { AxiosResponse } from 'axios'
import request from './request'

export const getCode = (): Promise<AxiosResponse> => request({
  method: 'get',
  url: 'wx/getUserInfoByCode'
})

interface LoginParam {
  um: string,
}
export const wechatLogin = (data: LoginParam): Promise<AxiosResponse> => request({
  method: 'post',
  url: 'api/performance/getUserPermission',
  data
})
