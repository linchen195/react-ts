import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MAINROUTES } from './routes'
import { wechatLogin } from '@/api/wechat'

export default class Router extends React.Component {
  async onLogin(): Promise<void> {
    try {
      const res = await wechatLogin({ umEmpno: 'LINCHEN832', isWX: 1 })
      console.log('res', res)
    } catch (error) {
      console.error(error)
    }
  }
  componentDidMount():void {
    this.onLogin()
  }
  render(): JSX.Element {
    return (
      <BrowserRouter>
        <Switch>
          {
            MAINROUTES.map((item: any) => {
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
          }
        </Switch>
      </BrowserRouter>
    )
  }
}
