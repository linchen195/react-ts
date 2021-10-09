import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MAINROUTES } from './routes'
// import Error from '@/pages/Error'

export default class Router extends React.Component {
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
