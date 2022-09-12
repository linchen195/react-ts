
import React from 'react'
import { Route } from 'react-router-dom'

interface Props {
  path: string,
  title: string,
  component: any,
  permission?: any[]
}

const RoutePage: React.FC<Props> = (props) => {
  const { path, title, permission } = props

  return (
    <Route
      path={path}
      exact
      render={(prop: any) => {
        document.title = title || '新项目'
        return <props.component {...prop} permission={permission}></props.component>
      }}
    ></Route>
  )
}

export default RoutePage
