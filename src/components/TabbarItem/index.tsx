import React, { Component } from 'react'
import './item.less'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface IProps extends RouteComponentProps {
  title?: string,
  icon?: string,
  activeIcon?: string,
  path?: any,
  key?: any,
  active?: string | number,
  onClick?: (path: any) => void
}
interface IState {
  isSelected: boolean
}
// type HomeProps = IProps & RouteComponentProps

class TabbarItem extends Component<IProps, IState> {
  constructor(props: IProps) {
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
    const { title, icon, activeIcon, path, active } = this.props
    const item =
        <React.Fragment>
          <div className="tabbar-item-wrap">
            <img className="tabbar-item-icon" src={path === active ? activeIcon : icon}/>
          </div>
          <div className="tabbar-item-title">{title}</div>
        </React.Fragment>
    const custItem = this.props.children
    return (
      <div className={`tabbar-item ${path == active?'tabbar-item-active':null}`} onClick={this.onClick}>
        {
          this.props.children ? custItem : item
        }
      </div>
    )
  }
}

export default withRouter(TabbarItem)

