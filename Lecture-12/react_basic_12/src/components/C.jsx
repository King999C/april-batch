import React from 'react'
import D from './D'

function C({count,setCount}) {
  return (
    <div>
        <h1>I am C</h1>
        <D count={count} setCount={setCount} />
    </div>
  )
}

export default C