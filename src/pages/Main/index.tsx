import React, { Component } from 'react'
import Tabbar from '@/components/Tabbar'
import TabbarItem from '@/components/TabbarItem'
import { ROUTES } from '@/router/routes'
import { RouteComponentProps } from 'react-router-dom'

export default class Main extends Component<RouteComponentProps> {
  onClick(path: string):void {
    console.log(this.props)
    this.props.history.push(path)
  }
  render(): JSX.Element {
    return (
      <div className="container">
        {this.props.children}
        <Tabbar>
          {
            ROUTES.map(item =>
              <TabbarItem tabTitle={item.title} key={item.path} onClick={this.onClick.bind(this, item.path)} ></TabbarItem>
            )
          }
        </Tabbar>
      </div>
    )
  }
}
