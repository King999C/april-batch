import React from 'react'
import B from './B'

function A({count,setCount}) {
  return (
    <div>
      <h1>I am A</h1>
      <B count={count} setCount={setCount} />
    </div>
  )
}

export default A