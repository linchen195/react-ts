import React from 'react'
import './dev_busi.less'
import Renewal from './Renewal'

export default class DevBusi extends React.Component {
  render(): JSX.Element {
    return (
      <div className="content-busi header-back">
        <div className="border-module">
          <ul>
            <li>活动追踪量</li>
            <li>续保追踪</li>
            <li>运营提醒</li>
          </ul>
        </div>
        {/* 待办事项 */}
        {/* 续保追踪 */}
        <Renewal></Renewal>
        {/* 活动量追踪 */}
      </div>
    )
  }
}
