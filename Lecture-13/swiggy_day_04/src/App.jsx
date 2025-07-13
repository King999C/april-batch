// import ApiCalling from "./components/ApiCalling"
import { Outlet } from "react-router-dom"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import appStore from "./utils/appStore"
import { Provider } from "react-redux"

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  )
}

export default App