import { Component } from "react";
import './item.less'
interface IProps {
  tabTitle: String
}
export default class TabbarItem extends Component<IProps> {
  render() {
    return (
      <div className="tabbar-item">{this.props.tabTitle}</div>
    )
  }
}
