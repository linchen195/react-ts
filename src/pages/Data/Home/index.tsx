
import React, { useEffect } from 'react'

import style from './data.module.less'

const Data = () => {
  useEffect(() => {
    mount()
  }, [])

  const mount = () => {
    console.log('1')

    setTimeout(function() {
      console.log('2')
      process.nextTick(function() {
        console.log('3')
      })
      new Promise<void>(function(resolve) {
        console.log('4')
        resolve()
      }).then(function() {
        console.log('5')
      })
    })
    process.nextTick(function() {
      console.log('6')
    })
    new Promise<void>(function(resolve) {
      console.log('7')
      resolve()
    }).then(function() {
      console.log('8')
    })

    setTimeout(function() {
      console.log('9')
      process.nextTick(function() {
        console.log('10')
      })
      new Promise<void>(function(resolve) {
        console.log('11')
        resolve()
      }).then(function() {
        console.log('12')
      })
    })
    console.log('13')
  }
  return (
    <div className={style['content-data']}>
      {/* <Pie data={data}></Pie> */}
    </div>
  )
}

export default Data
