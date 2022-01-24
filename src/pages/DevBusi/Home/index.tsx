import React from 'react'
import './dev_busi.less'
import TopPanel from './TopPanel'
import Renewal from './Renewal'
import Collapse from '@/components/Collapse'

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
        <Collapse defaultActive={['1']}>
          <Collapse.Panel key="1" title="标题">
            <p>大；规范；了撒娇鬼啥地方</p>
            <p>大；规范；了撒娇鬼啥地方</p>
            <p>大；规范；了撒娇鬼啥地方</p>
            <p>大；规范；了撒娇鬼啥地方</p>
            <p>大；规范；了撒娇鬼啥地方</p>
            <p>大；规范；了撒娇鬼啥地方</p>
            <p>大；规范；了撒娇鬼啥地方</p>
            <p>大；规范；了撒娇鬼啥地方</p>
            <p>大；规范；了撒娇鬼啥地方</p>
          </Collapse.Panel>
        </Collapse>
      </div>
    )
  }
}
