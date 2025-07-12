import React, { useState } from 'react'
import A from './components/A'
import PropDrilling from './components/PropDrilling'

function App() {
  // const [count,setCount] = useState(0)
  return (
    <div>
      {/* <A count={count} setCount={setCount} /> */}
      <PropDrilling />
    </div>
  )
}

export default App