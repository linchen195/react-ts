
import React, { Component, cloneElement } from 'react'

import Panel from './Panel'

interface Props {
  className?: string,
  title?: any,
  children?: any,
  defaultActive?: string[] | number[],
  active?: string[] | number[],
  onChange?: (arg: string[] | number[]) => void
}

interface State {
  active: any[]
}

export default class Collapse extends Component<Props, State> {
  static Panel: typeof Panel
  constructor(props: Props) {
    super(props)
    const { active, defaultActive } = props
    this.state = { active: (active || defaultActive || []) }
  }
  // 展开收起
  onChange = (val: string | number, expand: boolean): void => {
    const active: any[] = this.state.active
    if (expand) {
      active.push(val)
    } else {
      const index = active.findIndex(i => i === val)
      active.splice(index, 1)
    }
    // 回调onChange事件
    this.setState({ active }, () => {
      if (this.props.onChange)
        this.props.onChange(active)
    })
  }
  renderItem (domItem: any): JSX.Element {
    const isExpand = this.state.active?.findIndex((aItem: string | number) => domItem.key === aItem) > -1
    return cloneElement(domItem, {
      expand: isExpand,
      onChange: (expand: boolean) => this.onChange.bind(this, domItem.key, expand)
    })
  }
  render(): JSX.Element {
    const { className, children } = this.props
    const isArr = children instanceof Array
    return (
      <div className={className}>
        {
          isArr ? children.map((item: any) =>
            this.renderItem(item)
          ) : this.renderItem(children)
        }
      </div>
    )
  }
}
