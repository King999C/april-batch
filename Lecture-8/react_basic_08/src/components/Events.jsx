import { useState } from "react"

function Events() {
    const [inp,setInp] = useState("");

    function handleInp(e){
        setInp(e.target.value)
        console.log(e.target.value);
    }
  return (
    <div>
        <input onChange={handleInp} type="text" value={inp} />
        {/* <input onChange={()=>handleInp()} type="text" value={inp}/> */}
    </div>
  )
}

export default Events