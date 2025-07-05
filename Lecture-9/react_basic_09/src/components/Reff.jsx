import { useEffect, useRef, useState } from "react";

function Reff() {

    // let salary = 200000;
    const [salary,setSalary] = useState(200000)
    let spanEl = useRef()

    useEffect(function(){
        setTimeout(function(){
            // console.log(spanEl.current);
            spanEl.current.innerHTML = "400"
        } , 3000)
    } , [])

  return (
    <div>
        <h1>Salary is: <span ref={spanEl} >{salary}</span> </h1>
    </div>
  )
}

export default Reff


// --------------------------------------------


// import { useEffect } from "react";

// function Reff() {

//     let salary = 200000;

//     useEffect(function(){
//         setTimeout(function(){
//             document.getElementById('salary').innerHTML = "400";
//         } , 3000)
//     } , [])

//   return (
//     <div>
//         <h1>Salary is: <span id="salary">{salary}</span> </h1>
//     </div>
//   )
// }

// export default Reff