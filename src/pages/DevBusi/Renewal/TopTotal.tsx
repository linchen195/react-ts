import React, { Component } from 'react'

import styles from './renewal.module.less'

import { TRACE_OPTION, TraceItem } from './config'

export default class TopTotal extends Component {
  render(): JSX.Element {
    return (
      <div className={styles['rectangle-card']}>
        <p className={styles['trace-title']}>续保追踪</p>
        <div className={styles['trace-grid']}>
          {
            TRACE_OPTION.map((item: TraceItem) =>
              <div className={styles['trace-grid-item']} key={item.code}>
                <p className={styles.title}>{item.title}</p>
                <p>
                  <span className={item.code === 'c' ? styles['num-orange']:styles.num}>5</span>&nbsp;单
                </p>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
