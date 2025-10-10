import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import './App.css'
import Admin from './pages/Admin'
import Register from './pages/Register'
import Schedule from './pages/Schedule'

function App() {

  return (
    <>
      {/* <Landing/> */}

      <BrowserRouter>
        <Routes>
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
