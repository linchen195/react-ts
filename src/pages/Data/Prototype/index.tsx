
import React, { useEffect } from 'react'

const Prototype = () => {
  useEffect(() => {
    mounted()
  }, [])
  const mounted = () => {
    // const arr: any = [1, 2, 3]
    // console.log(arr, arr.__proto__ === Array.prototype, Array.prototype.__proto__ === Object.prototype,)

    // const Test = function () {
    //   this.name = '张三',
    //   this.age = 23
    // }
    // Test.prototype.age = 34
    // Test.prototype.sex = '男'
    // const obj = new Test()
    // console.log(obj)
  }
  return (
    <div></div>
  )
}

export default Prototype
