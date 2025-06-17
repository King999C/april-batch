import React from 'react'
import Batch11 from './Batch11'
import Batch22 from './Batch22'

function Mentor2({data}) {
  return (
    <div>
        <Batch11 data={data}/>
        <Batch22 data={data}/>
    </div>
  )
}

export default Mentor2