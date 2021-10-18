
import request from '@/api/request'

interface LoginParam {
  umEmpno: string,
  isWX: number
}

export const wechatLogin = (data: LoginParam) => {
  return (dispatch: () => void):Promise<void> => request({
    method: 'post',
    url: 'api/performance/getUserPermission',
    data
  }).then((res: any) => {
    if (res.code === 0) {
      dispatch()
    }
  })
}
