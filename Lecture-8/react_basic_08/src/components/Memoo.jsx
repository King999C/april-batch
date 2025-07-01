import { Fragment, memo, useState } from "react";
function Memoo({dog}){
    const [naam,setNaam] = useState(dog)
    function handleDog(){
        setNaam(Math.floor(Math.random()*10))
    }
    return(
        <div>
            <h1>hello from {naam}</h1>
            <button onClick={handleDog} >change the dog</button>
            <Chotu food="oats" />
            <Chotu food="maggie" />
            <Chotu food="burrito" />
        </div>
    )
}
const Chotu = memo( function({food}){
    return(
       <h1>Hello from {food} </h1>
    )
} )
// function Chotu({food}){
//     return(
//        <h1>Hello from {food} </h1>
//     )
// }
export default Memoo;