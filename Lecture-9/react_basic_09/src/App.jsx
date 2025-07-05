// import Reff from "./components/Reff"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import React, { lazy, Suspense } from "react"


// import Admin from "./components/Admin"
const Admin = React.lazy( ()=> import("./components/Admin") )

// import Dashboard from "./components/Dashboard"
const Dashboard = lazy(()=> import("./components/Dashboard") )

// import StateManager from "./components/StateManager"

function App(){
  return(
    <div>
      <Routes>
        <Route element={ <Home /> } path="/" />
        <Route element={ <Suspense fallback="admin loading..." > <Admin /> </Suspense> } path="/admin" />
        <Route element={ <Suspense fallback="dashboard laoding..." > <Dashboard /> </Suspense> } path="/dashboard" />
      </Routes>
    </div>
  )
}

export default App