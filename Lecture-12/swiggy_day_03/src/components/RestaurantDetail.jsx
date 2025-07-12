import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';

function RestaurantDetail() {
    let {id} = useParams();

    useEffect(()=>{
        async function calling(){
            const API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
            const resp = await axios.get(API);
            console.log(resp);
        }
        calling()
    } , [])

  return (
    <div>RestaurantDetail</div>
  )
}

export default RestaurantDetail