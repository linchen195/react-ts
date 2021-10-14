
import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { PANELS, PanelItem } from './config'

class TopPanel extends Component<RouteComponentProps> {
  render() {
    return (
      <div className="top-panel">
        <ul className="wrap-panel">
          {
            PANELS.map((item: PanelItem) => {
              return <li key={item.path}>
                <img className="panel-icon" src={item.icon}/>
                <span className="panel-title">{item.title}</span>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(TopPanel)
