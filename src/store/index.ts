
// import { createStore, combineReducers } from 'redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import user from './reducers/user'
// import other from './other'

// 全局你可以创建多个reducer 在这里统一在一起
const rootReducers = combineReducers({ user })
// 全局就管理一个store
export default createStore(rootReducers, applyMiddleware(thunk))
// export default createStore(rootReducers)
