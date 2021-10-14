import React, { Component } from 'react'
import './renewal.less'
import { TRACE_OPTION, TraceItem } from './config'

export default class Renewal extends Component {
  render(): JSX.Element {
    return (
      <div className="content-renewal">
        <div className="rectangle-card">
          <p className="module-title">续保追踪</p>
          <div className="trace-grid">
            {
              TRACE_OPTION.map((item: TraceItem) =>
                <div className="trace-grid-item" key={item.code}>
                  <p>{item.title}</p>
                  <p>5单</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
