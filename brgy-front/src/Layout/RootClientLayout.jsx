import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const RootClientLayout = () => {
  return (
    <>
      <Sidebar/>

       {/* Main content switches here */}
        <main className="flex-1 p-4 lg:p-6">
            <Outlet />
        </main>
    </>
  )
}

export default RootClientLayout
