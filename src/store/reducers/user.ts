import { lazy } from 'react'

interface UserState {
  token: string | null,
  um: string | null,
  name: string | null,
  role: any,
  region: any,
  menus: any[],
  noPermission: boolean,
}

interface Action {
  type: string,
  user: UserState,
}
const initState = {
  token: null,
  um: null,
  name: null,
  role: {},
  region: {},
  menus: [],
  noPermission: false,
}
const user = (state: UserState = initState, action: Action): any => {
  switch (action.type) {
    case 'SET_USER_INFO':
      // eslint-disable-next-line no-case-declarations
      const { token, um, name, region, role, menus } = action.user
      return {
        token, um, name, region, role, menus: initRoutes(menus)
      }
    case 'SET_NO_PERMISSION':
      return {
        noPermission: true
      }
    default:
      return state
  }
}

export default user

// 格式化页面路由
function initRoutes(menus: any[]): any[] {
  return menus.map((item: any) => {
    const { menuCode, title, path, children, component, type } = item
    return {
      menuCode,
      path,
      title,
      component: lazy(() => import(`@/pages/${component}`)),
      children: children ? initRoutes(children) : null,
      permission: children,
      type: type
    }
  })
}
