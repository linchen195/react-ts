import React, { Component, cloneElement } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import './tabbar.less'

interface IProps extends RouteComponentProps {
  children: any[]
}
interface IState {
  active?: string | number
}

class Tabbar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      active: this.props.location.pathname
    }
  }
  render(): JSX.Element {
    return (
      <div className="tabbar tabbar-flex">
        {
          this.props.children.map(item => {
            return cloneElement(item, {
              active: this.state.active,
              onClick: (val: any) => {
                this.setState({ active: val })
              }
            })
          })
        }
      </div>
    )
  }
}

export default withRouter(Tabbar)
