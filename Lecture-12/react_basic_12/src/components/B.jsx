import React from 'react'
import C from './C'

function B({count,setCount}) {
  return (
    <div>
      <h1>I am B</h1>
      <C count={count} setCount={setCount} />
    </div>
  )
}

export default B