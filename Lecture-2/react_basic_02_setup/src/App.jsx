import Maverick from "./components/Maverick";
import Person from "./components/Person";

function App(){
  return(
    <div>
      {/* <h1>Hello from h1</h1> */}
      {/* <Maverick /> */}
      <Person name="Samarth"  age={90} favColor="blue"  isMarried={false} />
      <Person name="Maverick" age={43} favColor="brown" isMarried={false} />
      <Person name="Kashish"  age={53} favColor="red"   isMarried={false} />

    </div>
  )
}

export default App;