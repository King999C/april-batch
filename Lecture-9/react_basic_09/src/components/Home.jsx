import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();

    function handleDash(){
        navigate('/dashboard')
    }
    function handleAdmin(){
        console.log("can perform more tasks here");
        navigate('/admin')
    }

  return (
    <div>
        <h1>Home</h1>
        {/* <a href="/dashboard">visit dashboard</a> */}
        <Link to="/dashboard"> visit dashboard </Link>

        <button onClick={handleDash} >Dashboard</button>

        {/* <a href="/admin">visit admin</a> */}

        <Link to="/admin"> visit admin </Link>
        <button onClick={handleAdmin} >Admin</button>
    </div>
  )
}

export default Home