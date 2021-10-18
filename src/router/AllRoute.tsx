import React, { Component } from 'react'
import { MAINROUTES } from './routes'
import { Route, withRouter, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'

const querystring:any = require('querystring')

interface IProps extends RouteComponentProps{
  name: string,
  SET_LOGIN: (param: any)=>any,
}

interface IState {
  isLogin: boolean
}

class AllRoute extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      isLogin: false
    }
  }
  UNSAFE_componentWillMount():void {
    const { search } = this.props.location
    if (this.props.name) {
      this.setState({ isLogin: true })
    } else if (search.indexOf('code') > -1) {
      const param = querystring.parse(search.replace(/\?/g, ''))
      console.log(param.code)
      this.setState({ isLogin: true })
    } else {
      window.location.href = `${process.env.REACT_APP_BASE_URL}/user/qywx/redirectAuthUrl`
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
    return this.state.isLogin ? main: <div>登录中</div>
  }
}

const mapStateToProps = (state: any) => {
  return {
    name: state.user.name
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  SET_LOGIN: (param: any) => dispatch({ type: 'SET_LOGIN', param })
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AllRoute))
