import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import RowModule from './RowModule'

class Renewal extends Component<RouteComponentProps>{
  jumpRenewalPage = () => {
    this.props.history.push({ pathname: '/renewal' })
  }
  render() {
    return (
      <div className="renewal-container">
        <div className="renewal-header">
          <p className="module-title">续保追踪</p>
          <a className="btn-more" onClick={this.jumpRenewalPage}><span>更多</span></a>
        </div>
        <RowModule className="renewal-main"></RowModule>
      </div>
    )
  }
}

export default withRouter(Renewal)
