
import { useEffect, useState } from "react"
import axios from 'axios'

function Effects(){

    const [todo,setTodo] = useState([])


    //only executes once
    useEffect( ()=>{
        async function callingApi(){
            const resp = await axios.get("https://jsonplaceholder.typicode.com/todos");
            console.log(resp.data); 
            setTodo(resp.data)
        }
        callingApi()
    } , [])

    return(
        <div>
            <h1>EFFECTS</h1>
            {
                todo.map((item)=>{
                    return(
                        <div>
                            <h1>TITLE: {item.title}</h1>
                            <h1>COMPLETED STATUS: {JSON.stringify(item.completed)} </h1>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Effects;


// ---------------------------------------


// import { useEffect, useState } from "react"

// function Effects(){

//     const [todo,setTodo] = useState([])
//     const [count,setCount] = useState(0)

//     //only executes once
//     useEffect( ()=>{
//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((resp)=>{ return resp.json() })
//         .then((data)=>{ 
//             console.log(data)
//             setTodo(data)
//         })
//     } , [count])

//     return(
//         <div>
//             <button onClick={()=> setCount(count+1)} >Change Count = {count}</button>
//             <h1>EFFECTS</h1>
//             {
//                 todo.map((item)=>{
//                     return(
//                         <div>
//                             <h1>TITLE: {item.title}</h1>
//                             <h1>COMPLETED STATUS: {JSON.stringify(item.completed)} </h1>
//                         </div>
//                     )
//                 })
//             }

//         </div>
//     )
// }

// export default Effects;


// -------------------------------------------------------

// import { useEffect, useState } from "react"

// function Effects(){

//     const [todo,setTodo] = useState([])
//     let abc = 10;
//     function handleABC(){
//         abc = Math.floor(Math.random()*10)
//         console.log(abc); 
//     }

//     //only executes once
//     useEffect( ()=>{
//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((resp)=>{ return resp.json() })
//         .then((data)=>{ 
//             console.log(data)
//             setTodo(data)
//         })
//     } , [abc])

//     return(
//         <div>
//             <button onClick={handleABC} >Change abc</button>

//             <h1>EFFECTS</h1>
//             {
//                 todo.map((item)=>{
//                     return(
//                         <div>
//                             <h1>TITLE: {item.title}</h1>
//                             <h1>COMPLETED STATUS: {JSON.stringify(item.completed)} </h1>
//                         </div>
//                     )
//                 })
//             }

//         </div>
//     )
// }

// export default Effects;

// --------------------------------------------



// import { useEffect, useState } from "react"

// function Effects(){

//     const [todos,setTodos] = useState([])

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((resp)=>{ return resp.json() })
//         .then((data)=>{ 
//             console.log(data) 
//             setTodos(data)
//         })
//     }, [])

//     return(
//         <div>
//             <h1>Effects</h1>
//             {
//                 todos.map((item)=>{
//                     return(
//                         <div>
//                             <h1>Title: {item.title} </h1>
//                             <h1>Completed Status: {JSON.stringify(item.completed)} </h1>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Effects;