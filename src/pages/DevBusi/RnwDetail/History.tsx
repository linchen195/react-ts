import React, { Component } from 'react'
import { Steps, Collapse } from 'antd-mobile'
import styles from './history.module.less'

interface IProps {
  onClose?: () => void
}

export default class History extends Component<IProps> {
  close = (): void => {
    if (this.props.onClose)
      this.props.onClose()
  }
  render(): JSX.Element {
    return (
      <div className={styles['content-history']}>
        <p className={styles['history-title']}>历史变更记录</p>
        <span className={styles['btn-close']} onClick={this.close}>&times;</span>
        {/* 步骤条 */}
        <div className={styles['wrap-step']}>
          <Steps direction='vertical'>
            <Steps.Step status='process' title={
              <Collapse className={styles['wrap-collapse']}>
                <Collapse.Panel className={styles['wrap-panel']} key='1' title="2021.09.23">
                手风琴模式只能同时展开一个
                </Collapse.Panel>
              </Collapse>
            }>
            </Steps.Step>
            <Steps.Step status='wait' title={
              <Collapse className={styles['wrap-collapse']}>
                <Collapse.Panel className={styles['wrap-panel']} key='1' title="2021.09.28">
                第二层
                </Collapse.Panel>
              </Collapse>
            }>
            </Steps.Step>
          </Steps>
        </div>
      </div>
    )
  }
}
