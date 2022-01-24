import React, { Component } from 'react'
import './group.less'

interface Props {
  className?: string,
  children?: any,
  title?: string
}
export default class CellGroup extends Component<Props> {
  render(): JSX.Element {
    const { title, children, className } = this.props
    return (
      <div className={`${className || ''} cell-group`}>
        { title ? <p className="cell-group-title">{title}</p> : null }
        { children }
      </div>
    )
  }
}
