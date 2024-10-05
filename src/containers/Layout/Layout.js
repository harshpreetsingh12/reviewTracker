import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div>
      <Navbar/>

      <main className='pl-24 pt-2'>
        <Outlet /> 
      </main>
    
      {/* <footer>
        <p >All rights reserved.</p>
      </footer> */}
    </div>
  )
}

export default Layout
