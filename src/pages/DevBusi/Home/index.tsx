import React from 'react'
import './dev_busi.less'
import TopPanel from './TopPanel'
import Renewal from './Renewal'

export default class DevBusi extends React.Component {
  render(): JSX.Element {
    return (
      <div className="content-busi">
        {/* 顶部面板 */}
        <TopPanel></TopPanel>
        {/* 待办事项 */}
        {/* 续保追踪 */}
        <Renewal></Renewal>
        {/* 活动量追踪 */}
      </div>
    )
  }
}
