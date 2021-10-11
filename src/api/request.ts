
const querystring:any = require('querystring')

import axios, { AxiosInstance, Method, ResponseType, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface AxiosRequest {
  url: string,
  method?: Method,
  data?: any,
  params?: any,
  headers?: any,
  responseType?: ResponseType
}

const instance:AxiosInstance = axios.create({
  // baseURL: process.env.BASE_URL,
  baseURL: '/ehis-golden-key/',
  timeout: 20000,
})

// 请求拦截器
instance.interceptors.request.use((config:AxiosRequestConfig) => {
  // config.headers.user = ''
  return config
}, (err: any) => Promise.reject(err))

// 响应拦截器
instance.interceptors.response.use((res: AxiosResponse) => {
  return res.data
}, (err: any) => Promise.reject(err))

export default (axiosConfig: AxiosRequest): Promise<AxiosResponse> => {
  const { method, url, data, params, headers } = axiosConfig
  const config: AxiosRequestConfig = {
    method,
    url,
    data,
    params
  }
  if (headers && headers['Content-Type'] && headers['Content-Type'].indexOf('') > -1) {
    config.data = querystring(axiosConfig.data)
  }
  return instance.request(config)
}
