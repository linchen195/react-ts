import React, { useEffect } from 'react'

const Es6 = () => {
  useEffect(() => {
    const symbol1 = Symbol(32)
    const symbol2 = Symbol('123')
    console.log(symbol1, symbol2)
  }, [])
  return (<div>es6</div>)
}

export default Es6
