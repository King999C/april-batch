// import Child from "./Child";

import { useState } from "react";

function Parent(){
    function handleData(data){
        console.log(data);
    }
    return(
        <div>
            <h1>Child Component Below</h1>
            <Child handleFn={handleData} data="samarth"  />
        </div>
    )
}

function Child({handleFn,data}){
    const [naam,setNaam ] = useState(data)
    return(
        <div>
            <button onClick={()=> setNaam("vohra")} >Change = {naam} </button>
            <h1 onClick={()=>handleFn("samarth vohra") } > I AM CHILD</h1>
        </div>
    )
}

export default Parent;