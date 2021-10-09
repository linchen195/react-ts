import Main from '@/pages/Main'
import Error from '@/pages/Error'
import Data from '@/pages/Data'
import Database from '@/pages/Database'
import DevBusi from '@/pages/DevBusi'

export const ROUTES: any[] = [
  {
    path: '/data',
    exact: true,
    title: '数据看板',
    component: Data
  },
  {
    path: '/dev-busi',
    exact: true,
    title: '展业',
    component: DevBusi
  },
  {
    path: '/database',
    exact: true,
    title: '知识库',
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
