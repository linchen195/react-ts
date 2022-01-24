
import React, { cloneElement, Component } from 'react'

interface Props {
  name?: string,
  label?: string,
  required?: boolean,
  children?: any,
  labelAlign?: string,
  valueAlign?: string,
  labelCol?: number,
  valueCol?: number,
  className?: string,
  onChange?: (arg: any) => void
}

class Form extends Component<Props> {
  static defaultProps = {
    labelAlign: 'left',
    valueAlign: 'left',
    labelCol: 8,
    valueCol: 16
  }
  render() {
    const { label, required, children, labelAlign, valueAlign, labelCol, valueCol, className } = this.props
    return (
      <div className={`custom-cell ${className || ''}`}>
        <div className={`cell-title cell-col-${labelCol} text-${labelAlign} ${required?'form-item-required':''}`}>
          { label }
        </div>
        <div className={`cell-value cell-col-${valueCol} text-${valueAlign}`}>
          {
            cloneElement(children, {
              onChange: (arg: any) => {
                if (children.props.onChange) {
                  children.props.onChange(arg)
                }
                setTimeout(() => {
                  const val = typeof arg === 'string' ? arg : arg.target.value
                  this.props.onChange ? this.props.onChange(val) : null
                }, 0)
              }
            })
          }
        </div>
      </div>
    )
  }
}

export default Form
