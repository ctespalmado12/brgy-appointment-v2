import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import './App.css'

function App() {

  return (
    <>
      {/* <Landing/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
