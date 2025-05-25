import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const AppLayout = () => {
  return (
    <div >
     <main className='min-h-screen container'>
        <Header/>
       <Outlet/>
     </main>
     <div className='p-10 text-center text-white bg-gray-800 mt-10'>
      Made with ❤️ by vijay
     </div>

    </div>
  )
}

export default AppLayout;