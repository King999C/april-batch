import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'
import Search from './Seach';

function Body() {

    let restArr = ApiCalling();// take time => [mock data array]-> jagriti
    const [allRestaurantArr, setAllRestaurantArr] = useState(restArr);
    const [isActive1,setIsActive1] = useState(false); //rating
    const [isActive2,setIsActive2] = useState(false); //reset

    useEffect(()=>{
        if(restArr && restArr.length){
            setAllRestaurantArr(restArr)
        }
    } , [restArr])

    function handleRating(restArr){
        let ratingFilteredArr = restArr.filter((Restaurant)=> Restaurant.info.avgRating >= 4.5)
        setAllRestaurantArr(ratingFilteredArr);
        setIsActive1(true);
        setIsActive2(false);
    }
    function handleReset(restArr){
        setAllRestaurantArr(restArr)
        setIsActive1(false);
        setIsActive2(true);
    }

  return (
    <div>
        <h1 className='font-bold text-2xl m-12'>Restaurants with online food delivery in Chhindwara</h1>
        <Search restArr={restArr} setAllRestaurantArr={setAllRestaurantArr} />
        
        <button onClick={()=>handleRating(restArr)}  className={isActive1 ?'border rounded-xl ml-16 w-1/12 p-2 bg-yellow-200' :'border rounded-xl ml-16 w-1/12 p-2' }>Rating 4.5+</button>
        <button onClick={()=>handleReset(restArr)}  className={isActive2 ?'border rounded-xl ml-16 w-1/12 p-2 bg-yellow-200' : 'border rounded-xl ml-16 w-1/12 p-2'}>Reset</button>

        <div className='flex flex-wrap m-auto w-10/12'>
            {
                allRestaurantArr.map((item)=>{
                    return(
                        <RestaurantCard item={item} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Body