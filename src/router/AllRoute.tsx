import React, { Component } from 'react'
import { MAINROUTES } from './routes'
import { Route, withRouter, RouteComponentProps } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { wechatLogin } from '@/store/actions/user'

const querystring:any = require('querystring')

interface IProps extends RouteComponentProps{
  token: string,
  wechatLogin: (param: any)=>any,
}

class AllRoute extends Component<IProps> {
  UNSAFE_componentWillMount():void {
    const { search } = this.props.location
    if (this.props.token) {
      this.setState({ isLogin: true })
    } else if (search.indexOf('code') > -1) {
      const param = querystring.parse(search.replace(/\?/g, ''))
      // 用户登录
      this.props.wechatLogin(param)
    } else {
      const redirectUrl = window.location.href.split('#')[0]
      window.location.href = `${process.env.REACT_APP_BASE_URL}user/qywx/redirectAuthUrl?url=${encodeURIComponent(redirectUrl)}`
    }
  }
  render() {
    const main = MAINROUTES.map((item: any) => {
      if (item.routes && item.routes.length) {
        return <Route key={item.path} path={item.path} component={() =>
          <item.component>
            {
              item.routes.map((subItem: any) => {
                return <Route key={subItem.path} path={subItem.path} component={subItem.component} exact></Route>
              })
            }
          </item.component>
        }/>
      } else {
        return <Route key={item.path} path={item.path} component={item.component} exact/>
      }
    })
    return this.props.token ? main: <div>登录中</div>
  }
}

const mapStateToProps = (state: any) => {
  return {
    token: state.user.token
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    wechatLogin: bindActionCreators(wechatLogin, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AllRoute))
