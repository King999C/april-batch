import { useEffect, useState } from "react"

function Timer(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        } , 1000)
    } , [count])


    return(
        <div>
            <h1>Time: {count} </h1>
        </div>
    )
}

export default Timer


// ------------------------------------------

// import { useEffect, useState } from "react"

// function Timer(){
//     const [count,setCount] = useState(0);

//     useEffect(()=>{
//         let id = setInterval(()=>{
//             setCount(count+1)
//         } , 1000)
//         //cleanup fn
//         return ()=> clearInterval(id) // btw 2 renders
//     } , [count])


//     return(
//         <div>
//             <h1>Time: {count} </h1>
//         </div>
//     )
// }

// export default Timer