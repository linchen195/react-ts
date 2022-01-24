
import React, { Component } from 'react'

interface IProps {
  title?: string,
  subTitle?: string,
  premium?: number,
  onClick?: () => void
}

function tags(val: number): any {
  const option = [{
    title: '保额≥500万',
    class: 'blue'
  }, {
    title: '保额100万-500万',
    class: 'orange'
  }, {
    title: '保额＜100万',
    class: 'gray'
  }]
  if (val >= 5000000) {
    return option[0]
  } else if (val >= 1000000 && val < 5000000) {
    return option[1]
  }
  return option[2]
}

export default class ComponyCard extends Component<IProps> {
  render(): JSX.Element {
    const { title, subTitle, premium } = this.props
    const tag = premium ? tags(premium) : {}
    return (
      <div className="wrap-item" onClick={this.props.onClick}>

      </div>
    )
  }
}
