import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../pages/Main'

export default class Router extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
