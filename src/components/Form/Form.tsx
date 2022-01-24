
import React, { cloneElement, Component } from 'react'

import './form.less'
import Item from './Item'

interface Props {
  children?: any,
  submitDisabled?: boolean,
  footer?: any,
  form?: any,
  onSubmit?: () => void
}
interface State {
  data: any,
  submitDisabled: boolean,
}

export default class Form extends Component<Props, State> {
  static Item: typeof Item
  static defaultProps = {
    confirmText: '确定'
  }
  constructor(props: Props) {
    super(props)
    this.state = {
      data: {},
      submitDisabled: false
    }
  }
  onFormSubmit = (e: any) => {
    if (this.props.onSubmit && !this.props.submitDisabled) {
      this.props.onSubmit()
    }
    e.preventDefault()
  }
  onItemChange = (val: any, item: any) => {
    const { name } = item.props

    const data: any = this.state.data

    data[name] = val

    // 是否可以点击提交
    const submitDisabled = this.props.children.findIndex(({ props: { required, name } }:any) => {
      return required && !data[name]
    }) > -1
    this.setState({ data, submitDisabled })
  }
  // 表单单项
  renderItem = (item: any, index: number) => {
    return cloneElement(item, {
      key: item.key || index,
      onChange: (val: any) => this.onItemChange(val, item)
    })
  }
  renderFooter() {
    return <div className="form-wrap-btn">
      <button
        className="btn-large btn-bottom-sure"
        disabled={this.props.submitDisabled}
        onClick={this.onFormSubmit}
      >确认</button>
    </div>
  }
  render() {
    const { children, footer } = this.props
    const isArray = children instanceof Array
    return (
      <form>
        {
          isArray ? children.map((item: any, index: number) =>
            this.renderItem(item, index)
          ) : this.renderItem(children, 0)
        }
        { footer ? footer : this.renderFooter() }
      </form>
    )
  }
}
