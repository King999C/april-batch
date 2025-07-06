import React from 'react'

function RestaurantCard() {
  return (
    <div className='m-8'>
      <img className='w-58 h-42 rounded-2xl' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG" alt="" />
      <h1 className='font-bold text-xl pl-2'>Pizza Hut</h1>
      <span className='font-bold pl-2'>4.3</span>
      <span className='mx-3 pl-2'>45-50 mins</span>
      <p className='pl-2'>Pizza's</p>
      <p className='pl-2'>Pubjabi Bagh Road</p>
    </div>
  )
}

export default RestaurantCard