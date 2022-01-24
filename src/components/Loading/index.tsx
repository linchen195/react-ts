
import React, { Component } from 'react'
import './loading.less'

interface IProps {
  showText?: string
}

export default class Loading extends Component<IProps> {
  renderItem = (): JSX.Element[] => {
    const res = []
    for (let i = 0; i < 8; i++) {
      res.push(<span></span>)
    }
    return res
  }
  render(): JSX.Element {
    return (
      <div className="loading">
        <div className="loading-icon">
          {
            this.renderItem
          }
        </div>
        <p>加载中</p>
      </div>
    )
  }
}
