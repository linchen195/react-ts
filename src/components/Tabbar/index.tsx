import React, { Component } from 'react'
import './tabbar.less'

interface IProps {
  children: any[]
}

export default class Tabbar extends Component<IProps> {
  render(): JSX.Element {
    return (
      <div className="tabbar tabbar-flex">
        { this.props.children }
      </div>
    )
  }
}
