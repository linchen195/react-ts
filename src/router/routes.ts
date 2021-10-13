import Main from '@/pages/Main'
import Error from '@/pages/Error'
import Data from '@/pages/Data'
import Database from '@/pages/Database'
import DevBusi from '@/pages/DevBusi/Home'

export const ROUTES: any[] = [
  {
    path: '/data',
    exact: true,
    title: '数据看板',
    icon: 'data',
    component: Data
  },
  {
    path: '/dev_busi',
    exact: true,
    title: '展业',
    icon: 'data',
    component: DevBusi
  },
  {
    path: '/database',
    exact: true,
    title: '知识库',
    icon: 'database',
    component: Database
  }
]

export const MAINROUTES: any[] = [
  {
    path: '/404',
    component: Error
  },
  {
    path: '/',
    component: Main,
    routes: ROUTES,
  }
]
