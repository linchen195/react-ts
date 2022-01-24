import Main from '@/pages/Main'
import Error from '@/pages/Error/Error'
import Data from '@/pages/Data/Home'
import Database from '@/pages/Database'
import DevBusi from '@/pages/DevBusi/Home'
import Renewal from '@/pages/DevBusi/Renewal'
import RnwDetail from '@/pages/DevBusi/RnwDetail'

export const ROUTES: any[] = [
  {
    path: '/main/data',
    exact: true,
    title: '数据看板',
    icon: 'data',
    component: Data
  },
  {
    path: '/main/dev_busi',
    exact: true,
    title: '展业',
    icon: 'dev_busi',
    component: DevBusi
  },
  {
    path: '/main/database',
    exact: true,
    title: '知识库',
    icon: 'database',
    component: Database
  }
]

export const MAINROUTES: any[] = [
  {
    path: '/renewal',
    exact: true,
    title: '续保追踪',
    component: Renewal
  },
  {
    path: '/rnw_detail',
    exact: true,
    title: '续保追踪',
    component: RnwDetail
  },
  {
    path: '/404',
    component: Error
  },
  {
    path: '/main',
    component: Main,
    routes: ROUTES,
  }
]
