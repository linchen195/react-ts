import React, { Component } from 'react'
import './item.less'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface IProps {
  tabTitle?: string,
  icon?: string,
  activeIcon?: string,
  path?: any,
  active?: string | number,
  onClick?: (path: any) => void
}
interface IState {
  isSelected: boolean
}
type HomeProps = IProps & RouteComponentProps

class TabbarItem extends Component<HomeProps, IState> {
  constructor(props: HomeProps) {
    super(props)
    this.state = {
      isSelected: false
    }
  }
  UNSAFE_componentWillMount(): void {
    if (this.props.path === this.props.location.pathname) {
      this.setState({ isSelected: true })
    }
  }
  onClick = ():void => {
    const { history, path } = this.props
    history.push(path)
    if (this.props.onClick)
      this.props.onClick(path)
  }
  render(): JSX.Element {
    const { tabTitle, icon, activeIcon, path, active } = this.props
    return (
      <div className={`tabbar-item ${path == active?'tabbar-item-active':null}`} onClick={this.onClick}>
        <div className="tabbar-item-wrap">
          <img className="tabbar-item-icon" src={path === active ? activeIcon : icon}/>
        </div>
        <div className="tabbar-item-title">{tabTitle}</div>
      </div>
    )
  }
}

export default withRouter(TabbarItem)

