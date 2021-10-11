import React, { Component } from 'react'
import Tabbar from '@/components/Tabbar'
import TabbarItem from '@/components/TabbarItem'
import { ROUTES } from '@/router/routes'

import './main.less'
interface IProps {
  children?: any[]
}

class Main extends Component<IProps> {
  render(): JSX.Element {
    return (
      <div className="container">
        <div className="content">
          {this.props.children}
        </div>
        <Tabbar>
          {
            ROUTES.map(item =>
              <TabbarItem tabTitle={item.title} key={item.path} path={item.path} ></TabbarItem>
            )
          }
        </Tabbar>
      </div>
    )
  }
}

export default Main
