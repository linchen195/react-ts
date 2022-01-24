import React from 'react'
import { BrowserRouter, Switch, } from 'react-router-dom'
import AllRoute from './AllRoute'

class Router extends React.Component{
  render(): JSX.Element {
    return (
      <BrowserRouter>
        <Switch>
          <AllRoute></AllRoute>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
