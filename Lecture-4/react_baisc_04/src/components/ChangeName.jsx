import { useState } from "react";

function ChangeName({naam}){
    let [namee,setNamee] = useState(naam);

    function nameChange(){
        // console.log(namee , "1");
        setNamee("Anonymous")
        // console.log(namee , "2");
    }

    return(
        <div>
            <h1>NAME: {namee}</h1>
            <button onClick={nameChange} >Logout</button>
        </div>
    )
}

export default ChangeName;




// ----------------------------------------


// function ChangeName({naam}){
//     let name = naam;
//     function nameChange(){
//         console.log(name);
//         name = "anonymous";
//         console.log(name);
//     }

//     return(
//         <div>
//             <h1>NAME: {name}</h1>
//             <button onClick={nameChange} >Logout</button>
//         </div>
//     )
// }

// export default ChangeName;