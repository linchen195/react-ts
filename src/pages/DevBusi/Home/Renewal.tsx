import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

class Renewal extends Component<RouteComponentProps>{
  render() {
    return (
      <div className="rectangular-module renewal-module">
        <p className="module-title">续保追踪</p>
        <a className="btn-more" href="">更多</a>
      </div>
    )
  }
}

export default withRouter(Renewal)
