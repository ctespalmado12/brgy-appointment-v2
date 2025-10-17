import React from 'react'

const SchedModal = ({setOpen}) => {
  return (
    <>
        <div id="medium-modal" tabIndex="-1" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 w-full p-4 overflow-y-auto">
            <div className="relative w-full max-w-lg max-h-full">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Make Appointment
                        </h3>
                        <button type="button" onClick={() => setOpen(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-4 md:p-5 space-y-4">
                            {/* CLIENT DETAILS */}
                        <section>
                            <h3 className="text-lg text-center font-semibold text-gray-900 dark:text-white mb-3">
                            Client Details
                            </h3>
                            <dl className="divide-y divide-gray-200 dark:divide-gray-600">
                            <div className="py-2 flex justify-between">
                                <dt className="font-medium text-gray-700 dark:text-gray-300">Client Name</dt>
                                <dd className="text-gray-900 dark:text-gray-100">Juan Dela Cruz</dd>
                            </div>
                            <div className="py-2 flex justify-between">
                                <dt className="font-medium text-gray-700 dark:text-gray-300">Contact No.</dt>
                                <dd className="text-gray-900 dark:text-gray-100">0917-123-4567</dd>
                            </div>
                            <div className="py-2 flex justify-between">
                                <dt className="font-medium text-gray-700 dark:text-gray-300">Address</dt>
                                <dd className="text-gray-900 dark:text-gray-100">Brgy Rosario, Pasig City</dd>
                            </div>
                            </dl>
                        </section>

                        {/* APPOINTMENT DETAILS */}
                        <section>
                            <h3 className="text-lg text-center font-semibold text-gray-900 dark:text-white mb-3">
                            Appointment Details
                            </h3>
                            <dl className="divide-y divide-gray-200 dark:divide-gray-600">
                            <div className="py-2 flex justify-between">
                                <dt className="font-medium text-gray-700 dark:text-gray-300">Brgy Official Name</dt>
                                <dd className="text-gray-900 dark:text-gray-100">Kagawad Santos</dd>
                            </div>
                            <div className="py-2 flex justify-between">
                                <dt className="font-medium text-gray-700 dark:text-gray-300">Appointment Date</dt>
                                <dd className="text-gray-900 dark:text-gray-100">October 15, 2025</dd>
                            </div>
                            <div className="py-2 flex justify-between">
                                <dt className="font-medium text-gray-700 dark:text-gray-300">Appointment Day</dt>
                                <dd className="text-gray-900 dark:text-gray-100">Wednesday</dd>
                            </div>
                            <div className="py-2 flex justify-between">
                                <dt className="font-medium text-gray-700 dark:text-gray-300">Available Time</dt>
                                <dd className="text-gray-900 dark:text-gray-100">2:00 PM – 3:00 PM</dd>
                            </div>
                            </dl>
                        </section>

                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reason for Appointment</label>
                            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option defaultValue="">Select category</option>
                            </select>
                        </div>
                        
                    </div>
                    {/* Modal footer */}
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="medium-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book</button>
                        <button data-modal-hide="medium-modal" type="button" onClick={() => setOpen(false)} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default SchedModal
