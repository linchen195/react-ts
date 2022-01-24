import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import Router from './router'
import { Provider } from 'react-redux'
import store from '@/store'

import './style/index.less'
import 'antd-mobile/es/global'

const vConsole = require('vconsole')
new vConsole()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  // <Router />,
  document.getElementById('root') as HTMLElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
