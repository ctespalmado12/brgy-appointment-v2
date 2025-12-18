import React from 'react'
import Swal from 'sweetalert2';
const MyAppointmentModal = ({onClose, appointment}) => {

    const cancelAppt = () => {
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, cancel it!",
        theme: 'auto'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
            title: "Canceled!",
            text: "Your appointment has been canceled.",
            icon: "success",
            theme: 'auto'
            });
        }
        });
    }

  return (
    <>
      <div id="medium-modal" tabIndex="-1" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 w-full p-4 overflow-y-auto">
            <div className="relative w-full max-w-lg max-h-full">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            My Appointment
                        </h3>
                        <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-4 md:p-5 space-y-4">
                        {/* APPOINTMENT DETAILS */}
                        <section>
                            <h3 className="text-lg text-center font-semibold text-gray-900 dark:text-white mb-3">
                            Appointment no. {appointment.no}
                            </h3>
                            <dl className="divide-y divide-gray-200 dark:divide-gray-600">
                            <div className="py-2 flex justify-between">
                                <dt className="font-medium text-gray-700 dark:text-gray-300">Brgy Official Name</dt>
                                <dd className="text-gray-900 dark:text-gray-100">{appointment.official}</dd>
                            </div>
                            <div className="py-2 flex justify-between">
                                <dt className="font-medium text-gray-700 dark:text-gray-300">Appointment Date</dt>
                                <dd className="text-gray-900 dark:text-gray-100">{appointment.date}</dd>
                            </div>
                            <div className="py-2 flex justify-between">
                                <dt className="font-medium text-gray-700 dark:text-gray-300">Appointment Time</dt>
                                <dd className="text-gray-900 dark:text-gray-100">{appointment.time}</dd>
                            </div>
                            <div className="py-2 flex justify-between">
                                <dt className="font-medium text-gray-700 dark:text-gray-300">Appointment Day</dt>
                                <dd className="text-gray-900 dark:text-gray-100">{appointment.day}</dd>
                            </div>
                            <div className="py-2 flex justify-between">
                                <dt className="font-medium text-gray-700 dark:text-gray-300">Status</dt>
                                <dd className="text-gray-900 dark:text-gray-100">{appointment.status}</dd>
                            </div>
                            <div className="py-2 flex justify-between">
                                <dt className="font-medium text-gray-700 dark:text-gray-300">Purpose</dt>
                                <dd className="text-gray-900 dark:text-gray-100">{appointment.purpose}</dd>
                            </div>
                            </dl>
                            </section>

                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Barangay official comment</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={appointment.comment} readOnly></textarea>
                        </div>
                        
                    </div>
                    {/* Modal footer */}
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button onClick={cancelAppt} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancel Appointment</button>
                        <button data-modal-hide="medium-modal" type="button" onClick={onClose} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MyAppointmentModal
