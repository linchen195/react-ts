
interface UserState {
  token: string | null,
  um: string | null,
  name: string | null,
  role: any,
  region: any
}

interface Action {
    type: string,
    user?: any,
}
const initState = {
  token: null,
  um: null,
  name: null,
  role: {},
  region: {}
}
const user = (state: UserState = initState, action: Action): any => {
  console.log(action)
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        token: action.user.token,
      }
    case 'SET_LOGIN':
      return {
        name: '李四'
      }
    default:
      return state
  }
}

export default user
