import React, { Component, Fragment } from 'react'
import NoPermission from '@/pages/Error/NoPermission'

import { Route, withRouter, RouteComponentProps } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { wechatLogin } from '@/store/actions/user'
import { MAINROUTES } from './routes'
import Error from '@/pages/Error/Error'

const querystring:any = require('querystring')

interface IProps extends RouteComponentProps{
  token: string,
  noPermission: boolean,
  wechatLogin: (param: any) => any,
  setUserInfo: (arg: any) => any
}

class AllRoute extends Component<IProps> {
  componentDidMount():void {
    const user = sessionStorage.getItem('user')
    const { search, pathname } = this.props.location

    if (user) {
      this.props.setUserInfo(JSON.parse(user))
    } else if (search.indexOf('code') > -1) { // 授权登录拿到code
      const param = querystring.parse(search.replace(/\?/g, ''))
      // 用户登录
      this.props.wechatLogin(param)
    } else {
      let redirectUrl = window.location.href.split('#')[0]
      if (pathname==='/')
        redirectUrl = 'main/dev_busi'
      window.location.href = `${process.env.REACT_APP_BASE_URL}user/qywx/redirectAuthUrl?url=${encodeURIComponent(redirectUrl)}`
    }
  }
  // 页面
  renderPage(route: any) {
    const { path, exact, title = 'e' } = route
    return <Route
      key={path}
      path={path}
      exact={exact}
      render = {(props) => {
        document.title = title // 先更新当前标题
        return <route.component {...props}></route.component>
      }}
    >
    </Route>
  }
  render() {
    const main = MAINROUTES.map((item: any) => {
      if (item.routes && item.routes.length) {
        return <Route key={item.path} path={item.path} component={() =>
          <item.component key={item.path}>
            {
              item.routes.map((subItem: any) => {
                return <Route key={subItem.path} {...subItem}></Route>
              })
            }
          </item.component>
        }>
        </Route>
      } else {
        return <Route key={item.path} {...item}/>
      }
    })
    const { token, noPermission } = this.props
    if (token){
      return <Fragment>
        {main}
        <Route path="*" component={Error} exact></Route>
      </Fragment>
    } else if (noPermission)
      return <NoPermission/>
    return null
  }
}

const mapStateToProps = (state: any) => {
  return {
    token: state.user.token,
    noPermission: state.user.noPermission
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    wechatLogin: bindActionCreators(wechatLogin, dispatch),
    setUserInfo: (user: any) =>dispatch({ type: 'SET_USER_INFO', user })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AllRoute))
