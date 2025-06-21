import { useState } from "react"

function Counter(){

    const [count,setCount] = useState(0);

    function handleDec(){
        console.log(count); // 0
        
        setCount((one)=>one-1) //having the access of the prev state        
        setCount((one)=>one-1)                
        setCount((one)=>one-1)     

        console.log(count);
        // setCount(count-1)             
        // setCount(count-1)             
        // setCount(count-1)             
    }
    function handleInc(){
        setCount((count)=>count+1) //having the access of the prev state
        setCount((count)=>count+1)
        setCount((count)=>count+1)
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)
    }

    return(
        <div>
            <button onClick={handleDec} > - </button>
            <h1>Count: {count} </h1>
            <button onClick={()=>handleInc()}> + </button>
        </div>
    )
}

export default Counter;


// -----------------------------------------------


// import { useState } from "react"

// function Counter(){

//     const [count,setCount] = useState(0);
//     function handleDec(){
//         // console.log(count , "before"); // sync - 0
//         setCount(count-1)                 //async statement  -1
//         // console.log(count , "after");  //sync - 0
//     }
//     function handleInc(){
//         setCount(count+1)
//     }

//     return(
//         <div>
//             <button onClick={handleDec} > - </button>
//             <h1>Count: {count} </h1>
//             <button onClick={()=>handleInc()}> + </button>
//         </div>
//     )
// }

// export default Counter;