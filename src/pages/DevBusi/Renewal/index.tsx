
import React, { Component } from 'react'

import styles from './renewal.module.less'
import TopTotal from './TopTotal'
import Sort from './Sort'
import Item from './Item'

export default class Renewal extends Component {
  render(): JSX.Element {
    return (
      <div className={styles['content-renewal']}>
        <TopTotal></TopTotal>
        <Sort></Sort>
        <div>
          <Item title="人力资源服务有限公司" policyNo="132435354" date="2012-32-23" tag="<100万保单"></Item>
          <Item title="中国平安银行股份有限公司" policyNo="134554645" date="2023-43-23" tag="100万-500万保单"></Item>
        </div>
      </div>
    )
  }
}
