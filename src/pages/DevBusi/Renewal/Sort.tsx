import React, { Component } from 'react'
import { Dropdown } from 'antd-mobile'
import styles from './renewal.module.less'

export default class Sort extends Component {
  render(): JSX.Element {
    return (
      <div className={styles['wrap-sort']}>
        <Dropdown className={styles['wrap-dropdown']}>
          <Dropdown.Item
            className={styles['dropdown-item']}
            key="sort" title="跟踪状态">
          </Dropdown.Item>
          <Dropdown.Item
            className={styles['dropdown-item']}
            key="sort2" title="投保金额">
          </Dropdown.Item>
        </Dropdown>
        <p className={styles['all-num']}>共5条数据</p>
      </div>
    )
  }
}
