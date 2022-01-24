
import React, { Component, createRef } from 'react'
import './collapse.less'

interface Props {
  className?: string,
  title?: any,
  children?: any,
  defaultExpand?: boolean,
  onChange?: (arg: boolean) => void,
  expand?: boolean
}

interface State {
  expand: boolean,
  height: any
}

export default class Panel extends Component<Props, State> {
  contentRef = createRef<HTMLDivElement>()
  static defaultProps = {
    className: ''
  }
  constructor(props: Props) {
    super(props)
    this.state = {
      expand: false,
      height: '',
    }
  }
  componentDidMount() {
    if (this.props.expand)
      this.expandContent()
  }
  componentDidUpdate(oldProps: Props) {
    if (oldProps.expand !== this.props.expand) {
      this.expandContent()
    }
  }
  expandContent = (): void => {
    const { expand } = this.state
    if (expand) { // 收起
      this.setState({ height: 0 }, () => {
        setTimeout(() => {
          this.setState({ expand: false, height: '' })
        }, 300)
      })
    } else { // 展开
      this.setState({ expand: true, height: '' }, () => {
        const offsetHeight: any = this.contentRef.current?.offsetHeight
        this.setState({ height: 0 }, () => {
          setTimeout(() => {
            this.setState({ height: offsetHeight })
          }, 0)
        })
      })
    }
    // 返回事件
    if (this.props.onChange)
      this.props.onChange(!expand)
  }
  renderContent(): JSX.Element {
    const { expand, height } = this.state
    const contentStyle = { display: expand?'block':'none', height }
    return <div className="collapse-wrapper" ref={this.contentRef} style={contentStyle}>
      <div className="collapse-content">
        {this.props.children}
      </div>
    </div>
  }
  render(): JSX.Element {
    const { className, title } = this.props
    const { height } = this.state
    return (
      <div className={`custom-collapse ${className}`}>
        <div className={`collapse-title ${height&&height!==0?'expand':''}`} onClick={this.expandContent}>
          { title }
        </div>
        {
          this.renderContent()
        }
      </div>
    )
  }
}
