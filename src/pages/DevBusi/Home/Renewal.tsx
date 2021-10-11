import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

class Renewal extends Component<RouteComponentProps>{
  render() {
    return (
      <div className="rectangular-module renewal-module">
        <p className="module-title">续保追踪</p>
      </div>
    )
  }
}

export default withRouter(Renewal)
