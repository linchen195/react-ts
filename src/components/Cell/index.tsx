import React, { Component } from 'react'

interface Props {
  title: string,
  value?: any,
  className?: string,
  titleCol?: number,
  valueCol?: number
}

export default class Cell extends Component<Props> {
  static defaultProps = {
    title: '-',
    value: '',
    className: '',
    titleCol: 12,
    valueCol: 12
  }
  constructor(props: Props) {
    super(props)
  }
  render(): JSX.Element {
    const { title, value, className, titleCol, valueCol } = this.props
    return (
      <div className={`custom-cell ${className}`}>
        <div className={`cell-title cell-col-${titleCol}`}>
          { title }
        </div>
        <div className={`cell-value cell-col-${valueCol}`}>
          { value }
        </div>
      </div>
    )
  }
}
