
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
      sessionStorage.setItem('user', JSON.stringify(res.model))

      dispatch({ type: 'SET_USER_INFO' })
    } else if (res.code === 2001 || res.code === 2002) {
      dispatch({ type: 'SET_NO_PERMISSION' })
    }
  }).catch(err => {
    console.log('err', err)
    sessionStorage.setItem('user', JSON.stringify({ token: 'abcdef' }))
    dispatch({ type: 'SET_USER_INFO', user: { token: 'abcdef' } })
  })
}
