import React from 'react'
import Nav from './Nav'
import Main from './Main'
import Career from './Career'

function Body({product1 , product2}) {
  return (
    <div>
        <Nav />
        <Main product1={product1} product2={product2}/>
        <Career />
    </div>
  )
}

export default Body