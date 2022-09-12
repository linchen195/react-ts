
import React from 'react'

import { Route, Switch } from 'react-router-dom'

import { useSelector } from 'react-redux'

import NoPermission from '@/pages/Error/NoPermission'

import RoutePage from './RoutePage'

import { OTHER_ROUTES } from './config'

// 路由页面

const RouteParent: React.FC = () => {
  const { menus, token } = useSelector((state: any) => state.user)

  const main = menus.map((item: any) => {
    const hasChildRoute = item.children?.find((r: any) => r.type === 'page')
    if (hasChildRoute) { // 父路由
      return <Route key={item.path} path={item.path} component={() =>
        <item.component>
          <Switch>
            {
              item.children.map((subItem: any) =>
                <RoutePage {...subItem} key={subItem.path}></RoutePage>
              )
            }
            <Route path="*" component={NoPermission} exact/>
          </Switch>
        </item.component>
      }/>
    } else {
      return <RoutePage {...item} key={item.path}></RoutePage>
    }
  })

  return (<Switch>
    { main }
    {
      OTHER_ROUTES.map((item: any) =>
        <Route {...item} key={item.path}></Route>
      )
    }
    {
      token ? <Route path="*" component={NoPermission} exact/> : null
    }
  </Switch>)
}

export default RouteParent

