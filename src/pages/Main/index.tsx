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
            ROUTES.map(item => {
              if (item.path === '/dev_busi') {
                return <TabbarItem
                  tabTitle={item.title}
                  key={item.path}
                  path={item.path}>
                </TabbarItem>
              } else {
                return <TabbarItem
                  tabTitle={item.title}
                  key={item.path}
                  path={item.path}
                  icon={require(`@/assets/tabbar/tab_${item.icon}.png`)}
                  activeIcon={require(`@/assets/tabbar/tab_${item.icon}_active.png`)}
                >
                </TabbarItem>
              }
            })
          }
        </Tabbar>
      </div>
    )
  }
}

export default Main
