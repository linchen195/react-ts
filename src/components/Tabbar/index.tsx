import { Component } from 'react'
import './tabbar.less'

interface IProps {
  btitle: String,
  children: any[]
}
interface IState {
  width: Number | String
}
export default class Tabbar extends Component<IProps, IState> {
  state = {
    width: '31324'
  }
  render() {
    return (
    <div className="tabbar tabbar-flex">
      {
        this.props.children.map((item: any) => item
        )  
      }
      </div>
    )
  }
} 

export  function a () {
  return (<div></div>)
}