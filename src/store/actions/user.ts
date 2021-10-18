
import request from '@/api/request'

interface LoginParam {
  code: string
}

export const wechatLogin = (data: LoginParam) => {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return (dispatch: any) => request({
    method: 'post',
    url: 'user/qywx/getUserInfoByCode',
    data
  }).then((res: any) => {
    if (res.code === 0) {
      dispatch({ type: 'SET_USER_INFO' })
    }
  }).catch(err => {
    console.log('err', err)
    dispatch({ type: 'SET_USER_INFO', user: { token: 'abcdef' } })
  })
  // return (dispatch: (arg0: any) => void): any => request({
  //   method: 'post',
  //   url: 'user/qywx/getUserInfoByCode',
  //   data
  // }).then((res: any) => {
  //   if (res.code === 0) {
  //     dispatch({ type: 'SET_USER' })
  //   }
  // })
}
