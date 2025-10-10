import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'
const Admin = () => {
  return (
    <>
      <div className='min-h-screen'>
        <div className='flex items-center justify-center text-center min-h-screen'>
            <div className='w-[280px] lg:w-[325px] m-4'>
               <img className='w-[150px] lg:w-[250px] m-2.5 mx-auto' src={Logo} alt="Barangay Logo" />
               <span className='text-center text-[var(--muted)] text-2xl lg:text-4xl break-words'>Barangay Rosario Appointment System</span>
                <form className="max-w-sm mx-auto pt-7">
                <div className="mb-5">
                    {/* <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
                </div>
                <div className="mb-5">
                    {/* <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label> */}
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='password' required />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" className="block w-full my-1.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                <Link to="/landing" className="block w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Back</Link>
                </form>

            </div>
        </div>
      </div>
    </>
  )
}

export default Admin
