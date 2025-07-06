import React from 'react'
import RestaurantCard from './RestaurantCard'

function Body() {
  return (
    <div>
        <h1 className='font-bold text-2xl m-12'>Restaurants with online food delivery in Chhindwara</h1>
        <button className='border rounded-xl ml-16 w-1/12 p-2'>Rating 4.5+</button>
        <button className='border rounded-xl ml-16 w-1/12 p-2'>Reset</button>

        <div className='flex flex-wrap m-auto w-10/12'>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    </div>
  )
}

export default Body