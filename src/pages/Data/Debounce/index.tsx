
import React from 'react'

import style from './debounce.module.less'

const Debounce = () => {

  const onDebounce = (fn: any, duration: number) => {
    let timer: any
    return (val?: any) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn(val)
      }, duration)
    }
  }

  const onInputChange = (val: any) => {
    console.log(val)
  }

  const onThrottle = (fn: any, duration: number) => {
    let lastTime = new Date().getTime()
    return function(val: any) {
      const currentTime = new Date().getTime()
      if (currentTime - lastTime > duration) {
        lastTime = currentTime
        fn(val)
      }
    }
  }

  return (
    <div className={style['container-debounce']}>
      <p>防抖</p>
      <input type="text" onChange={onDebounce(onInputChange, 300)}/>
      <p>节流</p>
      <input type="text" onChange={onThrottle(onInputChange, 500)}/>
    </div>
  )
}

export default Debounce
