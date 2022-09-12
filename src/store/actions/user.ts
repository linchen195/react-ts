
import request from '@/api/request'

interface LoginParam {
  code: string
}

export const wechatLogin = (data: LoginParam) => {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return (dispatch: any) => request({
    method: 'post',
    url: 'user/qywx/getUserInfoByCode',
    data
  }).then((res: any) => {
    if (res.code === 0) {
      sessionStorage.setItem('user', JSON.stringify(res.model))

      dispatch({ type: 'SET_USER_INFO' })
    } else if (res.code === 2001 || res.code === 2002) {
      dispatch({ type: 'SET_NO_PERMISSION' })
    }
  }).catch(err => {
    sessionStorage.setItem('user', JSON.stringify(model))
    dispatch({ type: 'SET_USER_INFO', user: model })
    console.log('err', err)
  })
}

const model = {
  'um': 'LINCHEN832',
  'name': '林郴',
  'role': {
    'roleCode': 'base',
    'roleName': '业务经理'
  },
  'menus': [{
    'menuCode': 'main',
    'parentCode': null,
    'parentName': null,
    'menuName': 'e企赚',
    'title': 'e企赚',
    'path': '/main',
    'routerName': null,
    'component': 'Main',
    'icon': null,
    'order': 1,
    'type': 'page',
    'desc': 'e企赚',
    'children': [{
      'menuCode': 'dev_busi',
      'parentCode': 'main',
      'parentName': null,
      'menuName': '展业',
      'title': 'e企赚',
      'path': '/main/dev_busi',
      'routerName': null,
      'component': 'DevBusi/Home',
      'icon': 'dev_busi',
      'order': 1,
      'type': 'page',
      'desc': '展业',
      'children': null
    }, {
      'menuCode': 'data',
      'parentCode': 'main',
      'parentName': null,
      'menuName': '数据看板',
      'title': '数据看板',
      'path': '/main/data',
      'routerName': null,
      'component': 'Data/Home',
      'icon': 'data',
      'order': 2,
      'type': 'page',
      'desc': '数据看板',
      'children': null
    }, {
      'menuCode': 'database',
      'parentCode': 'main',
      'parentName': null,
      'menuName': '知识库',
      'title': '知识库',
      'path': '/main/database',
      'routerName': null,
      'component': 'Database/Home',
      'icon': 'database',
      'order': 3,
      'type': 'page',
      'desc': '知识库',
      'children': null
    }]
  }],
  'region': {
    'regionCode': 'H020000',
    'regionName': '上海分公司'
  },
  'token': 'A941CA01BBFC7CA8D48ECA75A2ED4C4C255AFAB1C431637AB2C7FB43B4427C86'
}
