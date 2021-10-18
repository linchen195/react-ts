
import styles from './renewal.module.less'
import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

interface IProps extends RouteComponentProps {
  title?: string,
  policyNo?: string,
  date?: string,
  tag?: string
}

class Item extends Component<IProps> {
  jumpDetailPage = () => {
    this.props.history.push('rnw_detail')
  }
  render(): JSX.Element {
    console.log(this.props.location)
    const { title, policyNo, date, tag } = this.props
    return (
      <div className={styles['wrap-item']} onClick={this.jumpDetailPage}>
        <p className={styles['cpn-name']}>{title}</p>
        <p className={styles['policy-intro']}>
          <span>保单号：{policyNo}</span>
          <span>&nbsp;|&nbsp;</span>
          <span>满期日：{date}</span>
        </p>
        <p className={styles['policy-tag']}>{tag}</p>
      </div>
    )
  }
}

export default withRouter(Item)
