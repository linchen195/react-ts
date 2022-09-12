
import React from 'react'
import { useHistory } from 'react-router-dom'

import style from './data.module.less'

const Data = () => {
  const history = useHistory()

  const jumpProptotypePage = (pathname: string) => {
    history.push({ pathname })
  }

  return (
    <div className={style['content-data']}>
      {/* <Pie data={data}></Pie> */}
      <button onClick={() => jumpProptotypePage('/prototype')}>prototype</button>
      <button onClick={() => jumpProptotypePage('/eventloop')}>eventloop</button>
      <button onClick={() => jumpProptotypePage('/debounce')}>debounce</button>
      <button onClick={() => jumpProptotypePage('/es6')}>es6</button>
    </div>
  )
}

export default Data
