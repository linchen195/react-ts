
import React, { Component } from 'react'
import { Picker } from 'antd-mobile'

import './select.less'

interface Props {
  className?: string,
  option: any[],
  placeholder?: string,
  onChange?: (arg: any) => void
}

interface State {
  show: boolean,
  selected: any
}

export default class Select extends Component<Props, State> {
  static defaultProps = {
    className: '',
    option: [],
    placeholder: '请选择'
  }
  constructor(props: Props) {
    super(props)
    this.state = {
      show: false,
      selected: {}
    }
  }
  onConfirm = (val: any) => {
    const selected = this.props.option.find(item => item.value === val[0])
    this.setState({
      show: false,
      selected
    })
    if (this.props.onChange)
      this.props.onChange(selected.value)
  }
  render() {
    const { option, placeholder, className } = this.props
    const { selected, show } = this.state
    return (
      <div className={`custom-select ${className}`}>
        <p className="slt-choose" onClick={() => this.setState({ show: true })}>
          {
            selected.value ?
              <span className="slt-text">{selected.label}</span>:
              <span className="slt-placeholder">{placeholder}</span>
          }
        </p>
        <Picker
          columns={[option]}
          visible={show}
          onConfirm={this.onConfirm}
          onCancel={() => this.setState({ show: false })}
        />
      </div>
    )
  }
}
