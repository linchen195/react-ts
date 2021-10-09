import request from './request'

export const code = (param) => request({
  method: 'get',
  url: 'wx/getUserInfoByCode',
  param
})

export const login = (data) => request({
  method: 'post',
  url: 'getUserPermission',
  data
})
