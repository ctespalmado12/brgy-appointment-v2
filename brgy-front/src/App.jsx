import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import './App.css'
import Admin from './pages/Admin'
import Register from './pages/Register'
import Schedule from './pages/Schedule'
import Dashboard from './pages/client/Dashboard'
import Dashboard1 from './pages/client/Dashboard1'

function App() {

  return (
    <>
      {/* <Landing/> */}

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Dashboard/>}></Route> */}
          <Route path="/" element={<Dashboard1/>}></Route>
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
