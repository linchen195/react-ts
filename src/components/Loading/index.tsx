
import React, { Component } from 'react'
import './loading.less'

interface IProps {
  text?: string,
  className?: string
}

export default class Loading extends Component<IProps> {
  render(): JSX.Element {
    return (
      <div className="loading">
        <p>{this.props.text}</p>
      </div>
    )
  }
}
