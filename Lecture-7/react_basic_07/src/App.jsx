import { useEffect, useState } from "react";

function App(){

  const [count,setCount] = useState(0);
  
  useEffect(()=>{
    if(count === 0){ console.log("Mounted") }
    else if(count>0 && count<5){ console.log("updated")  }
    else if(count === 5){
      return ()=>{ console.log("Unmounted") }
    }
  } , [count])

  return(
    <>
      <h1  onClick={()=>setCount(count+1)}>count - {count}</h1>
    </>
  )
}

export default App;

// -------------------------------------

// import React from "react";
// import Counter from "./components/Counter";

// export default class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       count: 0
//     }
//   }

//   componentDidMount(){
//     console.log("component is mounted");
//   }
//   decrese(){
//     this.setState({count: this.state.count - 1})
//   }

//   componentWillUnmount(){
//     console.log("component is removed");
//   }

//   render(){
//     return(
//       <div>

//         <Counter count={this.state.count} />

//         <button onClick={()=>this.setState({count:this.state.count + 1})} >INC</button>
//         <h1> Count: {this.state.count} </h1>
//         <button onClick={this.decrese.bind(this)} >Dec</button>
//       </div>
//     )
//   }
// }