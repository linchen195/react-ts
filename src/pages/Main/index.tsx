import { Component } from 'react'
import Tabbar from '../../components/Tabbar'
import TabbarItem from '../../components/TabbarItem'

export default class Main extends Component {
  
  render() {
    const menus:any[] = [
      {
        title: '数据看板'
      }, 
      {
        title: '展业'
      },
      {
        title: '知识库'
      }
    ]
    return (
      <Tabbar btitle="张三">
        {
          menus.map(item =>
            <TabbarItem tabTitle={item.title} key={item.title}></TabbarItem>
          )
        }
      </Tabbar>
    )
  }
}