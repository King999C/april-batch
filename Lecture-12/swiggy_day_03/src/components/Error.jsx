import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

function Error() {
    let err = useRouteError();
    console.log(err , 'err');
  return (
    <div>
        <Header />
        <h1>OOPS!</h1>
        <h1>{err.data}</h1>
        <h1>{err.status}</h1>
        <h1>{err.statusText}</h1>
        <div className='fixed bottom-0 w-full'>
            <Footer />
        </div>
    </div>
  )
}

export default Error