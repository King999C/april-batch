import { useEffect, useState } from "react";

function ApiCalling(){
    const API="https://jsonplaceholder.typicode.com/todos";
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        async function calling(){
            let partialData = await fetch(API);
            let result = await partialData.json();
            setTodos(result)
        }
        calling()

    },[])

    return(
        <div>
            {
                todos.map((item,index)=>{
                return (
                    <div key={index} > 
                        <h1>Title: {item.title}</h1> 
                    </div>
                ) 
                })
            }

        </div>
    )
}

export default ApiCalling;