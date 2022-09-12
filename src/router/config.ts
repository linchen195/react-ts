
import { lazy } from 'react'

const Return = lazy(() => import('@/pages/Other/Return'))
const Main = lazy(() => import('@/pages/Main'))
const Data = lazy(() => import('@/pages/Data/Home'))
const DevBusi = lazy(() => import('@/pages/DevBusi/Home'))
const Database = lazy(() => import('@/pages/Database'))

const Prototype = lazy(() => import('@/pages/Data/Prototype'))
const Eventloop = lazy(() => import('@/pages/Data/Eventloop'))
const Debounce = lazy(() => import('@/pages/Data/Debounce'))
const Es6 = lazy(() => import('@/pages/Data/Es6'))

export const OTHER_ROUTES = [
  {
    path: '/prototype',
    title: 'prototype',
    component: Prototype
  },
  {
    path: '/eventloop',
    title: 'eventloop',
    component: Eventloop
  },
  {
    path: '/debounce',
    title: 'debounce',
    component: Debounce
  },
  {
    path: '/es6',
    title: 'es6',
    component: Es6
  },
  {
    path: '/return',
    title: 'react测试',
    component: Return
  }
]

export const MENUS = [
  {
    path: '/main',
    title: 'react测试',
    component: Main,
    children: [
      {
        path: '/main/data',
        title: '首页',
        component: Data,
      },
      {
        path: '/main/dev_busi',
        title: '主页',
        component: DevBusi,
      },
      {
        path: '/main/database',
        title: '知识库',
        component: Database,
      }
    ]
  }
]
