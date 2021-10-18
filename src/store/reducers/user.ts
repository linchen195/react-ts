
interface ReduxState {
  name: string | null
}

interface Action {
    type: string,
    param?: any,
}
const initState = {
  name: null
}
const user = (state: ReduxState = initState, action: Action): any => {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        name: '李四'
      }
    default:
      return state
  }
}

export default user
