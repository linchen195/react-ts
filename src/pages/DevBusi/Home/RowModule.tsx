import React, { Component } from 'react'

interface IProps {
  className?: string
}

export default class RowModule extends Component<IProps> {
  render ():JSX.Element {
    return (
      <div className={`${this.props.className} grid-row`}>
        <div className="grid-col">
          <p className="num">5</p>
          <p className="introduce">本月待续保保单</p>
        </div>
        <span className="icon-operator">=</span>
        <div className="grid-col">
          <p className="num">3</p>
          <p className="introduce">未续保保单</p>
        </div>
        <span className="icon-operator">+</span>
        <div className="grid-col">
          <p className="num">2</p>
          <p className="introduce">已续保保单</p>
        </div>
      </div>
    )
  }
}
