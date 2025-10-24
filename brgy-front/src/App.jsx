import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import './App.css'
import Admin from './pages/Admin'
import Register from './pages/Register'
import Schedule from './pages/Schedule'
import Dashboard from './pages/client/Dashboard'
import BookAppointment from './pages/client/BookAppointment'
import RootClientLayout from './Layout/RootClientLayout'
import Profile from './pages/client/Profile'
import MyAppointment from './pages/client/MyAppointment'

function App() {

  return (
    <>
      {/* <Landing/> */}

      <BrowserRouter>
        <Routes>
          {/* All routes below share the sidebar layout */}
          <Route path='/' element={<RootClientLayout />}>
            {/* Default: redirect / -> /clientBookAppointment */}
            <Route index element={<Navigate to="clientBookAppointment" replace />} />

            {/* Children are relative to "/" */}
            <Route index path="/clientBookAppointment" element={<BookAppointment />} />
            <Route path="/clientMyAppointment" element={<MyAppointment />} />
            <Route path="/clientProfile" element={<Profile />} />
            {/* <Route path="/clientSignout" element={<Logout />} /> */}
          </Route>

          {/* <Route path="/" element={<Dashboard/>}></Route> */}
          {/* <Route path="/" element={<RootClientLayout/>}></Route> */}
          {/* <Route path="/clientBookAppointment" element={<BookAppointment/>}></Route> */}
          <Route path="/landing" element={<Landing/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/schedule' element={<Schedule/>}/>
        </Routes>
      </BrowserRouter>

    
    </>
  )
}

export default App
