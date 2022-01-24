
interface UserState {
  token: string | null,
  um: string | null,
  name: string | null,
  role: any,
  region: any,
  noPermission: boolean
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
  noPermission: false
}
const user = (state: UserState = initState, action: Action): any => {
  switch (action.type) {
    case 'SET_USER_INFO':
      // eslint-disable-next-line no-case-declarations
      const { token, um, name, region, role } = action.user
      return {
        token, um, name, region, role
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
