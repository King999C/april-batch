import React, { useContext, useState } from 'react'
import { CountContext } from './Context';

function PropDrilling() {
    const [count,setCount] = useState(0);
  return (
    <div>
        <CountContext.Provider value={count}>
            <Count setCount={setCount} />
        </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
    return(
        <div>
            <CountRender />
            <Buttons setCount={setCount} />
        </div>
    )
}

function CountRender(){
    let countt = useContext(CountContext)
    return(
        <div>
            <h1>Count: {countt}</h1>
        </div>
    )
}

function Buttons({setCount}){
    let countt = useContext(CountContext)
    return(
        <div>
            <button onClick={()=>setCount(countt+1)} >INCREASE</button>
        </div>
    )
}

export default PropDrilling