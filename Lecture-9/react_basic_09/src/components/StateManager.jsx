import { useRef, useState } from "react"


function StateManager() {
    const [count,setCount] = useState(0);
    const countRef = useRef(0);

    function handleRef(){
        countRef.current++
    }

  return (
    <div>
        <button onClick={handleRef}>Ref: {countRef.current} </button>

        <button onClick={()=> setCount(count+1)} >Counter: {count}</button>
    </div>
  )
}

export default StateManager