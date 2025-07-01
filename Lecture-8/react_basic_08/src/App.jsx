import Events from "./components/Events";
import Memoo from "./components/Memoo";
import Usecallback from "./components/Usecallback";
import UseMemo from "./components/UseMemo";

function App(){
  return(
    <div>
      <h1>App</h1>
      {/* <Memoo dog="maverick" /> */}
      {/* <Events /> */}
      {/* <UseMemo /> */}
      <Usecallback />
    </div>
  )
}

export default App;