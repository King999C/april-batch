// function Person(props){

//     console.log(props); //object
    

//     return(
//         <div>
//             <h1>Name: {props.name}</h1>
//             <h1>Age: {props.age}</h1>
//             <h1>FavColor: {props.favColor}</h1>
//             <h1>Married: {props.isMarried}</h1>
//         </div>
//     )
// }

// export default Person;

// ------------------------------------

function Person({name,age,favColor,isMarried}){

    // console.log(name); 

    return(
        <div>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>FavColor: {favColor}</h1>
            <h1>Married: {isMarried}</h1>
        </div>
    )
}

export default Person;