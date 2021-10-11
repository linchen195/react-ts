/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import request from './request'

export const getCode = (param) => request({
  method: 'get',
  url: 'wx/getUserInfoByCode',
  param
})

export const wechatLogin = (data) => request({
  method: 'post',
  url: 'api/performance/getUserPermission',
  data
})
