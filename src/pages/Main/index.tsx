import React, { Component } from 'react'
import Tabbar from '@/components/Tabbar'
import TabbarItem from '@/components/TabbarItem'
import { MENUS } from './config'

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
            MENUS.map((item: any) => {
              if (item.path.indexOf('dev_busi') > -1) {
                return <TabbarItem
                  key={item.path}
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
