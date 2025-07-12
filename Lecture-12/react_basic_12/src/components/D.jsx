import React from 'react'

function D({count,setCount}) {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=> setCount(count+1)} >Increase</button>
    </div>
  )
}

export default D