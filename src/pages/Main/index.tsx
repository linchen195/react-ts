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
      <React.Fragment>
        <div className="container">
          {this.props.children}
        </div>
        <Tabbar>
          {
            ROUTES.map(item => {
              if (item.path === '/dev_busi') {
                return <TabbarItem
                  key={item.path}
                  title={item.title}
                  path={item.path}
                >
                  <div className="tab-item-center">
                    <img src={require('@/assets/tabbar/tab_dev_busi.png')} />
                  </div>
                </TabbarItem>
              } else {
                return <TabbarItem
                  key={item.path}
                  title={item.title}
                  path={item.path}
                  icon={require(`@/assets/tabbar/tab_${item.icon}.png`)}
                  activeIcon={require(`@/assets/tabbar/tab_${item.icon}_active.png`)}
                >
                </TabbarItem>
              }
            })
          }
        </Tabbar>
      </React.Fragment>
    )
  }
}

export default Main
