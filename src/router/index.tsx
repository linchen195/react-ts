import React, { Suspense } from 'react'
import { BrowserRouter, } from 'react-router-dom'

import Login from './Login'
import Loading from '@/components/Loading'

const Router = () =>{
  return (
    <BrowserRouter>
      <Suspense fallback={
        <Loading className="router-loading" text="页面加载中"></Loading>
      }>
        <Login></Login>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router

