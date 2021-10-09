import React from 'react'
import './item.less'

interface IProps {
  tabTitle?: string,
  onClick?: () => void
}

export default class TabbarItem extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }
  render(): JSX.Element {
    return (
      <div className="tabbar-item" onClick={this.props.onClick}>
        <div className="tabbar-item-wrap">
          <img className="tabbar-item-icon" src=""/>
        </div>
        <div className="tabbar-item-title">{this.props.tabTitle}</div>
      </div>
    )
  }
}

