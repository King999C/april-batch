import { memo, useCallback, useState } from "react";

function Usecallback(){
    const [count,setCount] = useState(0);
    // let data = function(){return "Samarth Vohra"}
    let data = useCallback( function(){return "Samarth Vohra"} , [] )

    return(
        <div>
            <button onClick={()=>setCount(count+1)} >Counter - {count}</button>
            <Chotu d={data} />
        </div>
    )
}
const Chotu =  memo( function ({d}){
    return(
        <div>
            <h1>Hello from -{d()} </h1>
        </div>
    )
} )


export default Usecallback