import React from 'react'
import LandingBg from '../img/bg.jpg'
import { Link } from "react-router-dom"
import Logo from "../img/logo.png"

const Landing = () => {
  return (
    <div>
      <div className="bg-[url('./img/bg.jpg')] bg-cover bg-center min-h-screen" >
        <div className='flex items-center justify-center min-h-screen'>
            <div className='card w-[280px] lg:w-[325px]'>
              <img className='w-[150px] lg:w-[250px] m-2.5 mx-auto' src={Logo} loading="lazy" alt="Barangay logo" />
              <h1 className='text-2xl lg:text-3xl text-center font-medium whitespace-normal break-words m-2.5'>Barangay Rosario Appointment System</h1>
              <hr className='w-full pb-5'/>
              <Link className='button block w-full ' to="/login">login</Link>
              <Link className='button block w-full ' to="/register">Register</Link>
              <br />
              <Link className='button block w-full ' to="/schedule">Schedule</Link>
              <Link className='button block w-full ' to="/admin-login">Admin Login</Link>
            </div>
        </div>
        
      </div>
    </div>

  )
}

export default Landing
