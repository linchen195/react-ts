
import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import NoPermission from '@/pages/Error/NoPermission'
import RouteParent from './RouteParent'

import { wechatLogin } from '@/store/actions/user'

const querystring:any = require('querystring')

const Login: React.FC = () => {
  const { token, noPermission, menus } = useSelector((state: any) => state.user)
  const dispatch = useDispatch()
  const history = useHistory()
  const { search, pathname } = useLocation()

  useEffect(() => {
    // mounted
    userLogin()
  }, [])

  // 用户登录
  const userLogin = () => {
    const user = sessionStorage.getItem('user')
    if (user) { // 如果sessionStorage有用户信息
      dispatch({ type: 'SET_USER_INFO', user: JSON.parse(user) })
    } else if (search.indexOf('code') > -1) { // 授权登录拿到code
      // 授权登录之后，更新上一个页面为返回
      // window.history.pushState({}, 'e企赚', '/return')
      // 用户登录
      const param = querystring.parse(search.replace(/\?/g, ''))
      dispatch(wechatLogin(param))
    } else { // 授权登录
      const redirectUrl = window.location.href.split('#')[0]
      window.location.replace(`${process.env.REACT_APP_BASE_URL}user/qywx/redirectAuthUrl?url=${encodeURIComponent(redirectUrl)}`)
    }
  }

  const render = () => {
    if (token) { //登录成功后
      if (pathname === '/') { // 首次应用进入需要进入有权限的页面
        const home = menus.find((item: any) => item.path === '/main')?.children
        if (home)
          history.push({ pathname: home[0].path })
      }
      return <RouteParent></RouteParent>
    } else if (noPermission) { // 无权限
      return <NoPermission/>
    }
    return null
  }
  return render()
}

export default Login

