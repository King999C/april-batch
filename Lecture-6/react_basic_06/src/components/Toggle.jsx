import { useState } from "react"

function Toggle(){
    const [isShow,setIsShow] = useState(false);

    function handleMessage(){
        setIsShow(!isShow)
    }
    return(
        <div>
            { isShow ? <Message /> : null }
            <button onClick={handleMessage} >Click me</button>
        </div>
    )
}

function Message(){
    return(
        <h1>Hello from message</h1>
    )
}

export default Toggle