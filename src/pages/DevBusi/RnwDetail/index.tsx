import React, { Component } from 'react'
import styles from './detail.module.less'
import { Mask } from 'antd-mobile'
import History from './History'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {

}
interface IState {
  show: boolean
}
export default class RnwDetail extends Component<IProps, IState> {
  constructor(prop: IProps) {
    super(prop)
    this.state = {
      show: false
    }
  }
  openHistoryMask = ():void => {
    this.setState({ show: true })
  }
  render(): JSX.Element {
    const { show } = this.state
    return (
      <div className={styles['content-detail']}>
        <div className={styles['top-total']}>
          <p className={styles['cpn-name']}>融创华北域房地产集团有限公司</p>
          <p className={styles['policy-intro']}>满期日：2334-30-43</p>
          <p className={styles['policy-tag']}>500万-34保单</p>
        </div>
        <div className={styles['wrap-title']}>
          <p className="module-title">续保状态</p>
          <a className={styles['btn-history']} onClick={this.openHistoryMask}>
            <span>历史记录</span>
          </a>
        </div>
        <Mask visible={show}>
          <History onClose={() => this.setState({ show: false })}></History>
        </Mask>
        <div className="rectangle-card">
          <div>当前状态</div>
        </div>
      </div>
    )
  }
}
