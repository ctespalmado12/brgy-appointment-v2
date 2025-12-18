import React, { useEffect, useRef, useState } from 'react'
import { initFlowbite } from "flowbite";
import Swal from 'sweetalert2';
const GetAppointmentModal = ({ appointment ,onClose}) => {

    useEffect(() => {
        initFlowbite(); 
        
    });


    const AptDetailsRef = useRef(null);

    const bookAppt = (appointment) => {

        const appoinmentBooked = new FormData(AptDetailsRef.current);
        const appointmentValues = Object.fromEntries(appoinmentBooked.entries());

        Swal.fire({
            title: "<strong>Appointment Preview</strong>",
            theme: "auto",
            html: `
                <section>
                    <h3 style="text-align:center; font-weight:600; margin-bottom:12px;">
                        Client Details
                    </h3>

                    <dl className="divide-y divide-gray-200 dark:divide-gray-600">
                    <div style="display:flex; justify-content:space-between; padding:6px 0;">
                        <span><b>Name</b></span>
                        <span></span>
                    </div>
                    <div style="display:flex; justify-content:space-between; padding:6px 0;">
                        <span><b>Contact No.</b></span>
                        <span></span>
                    </div>
                    <div style="display:flex; justify-content:space-between; padding:6px 0;">
                        <span><b>Address</b></span>
                        <span></span>
                    </div>
                    </dl>
                </section>
                <section>
                    <h3 style="text-align:center; font-weight:600; margin-bottom:12px;">
                        Appointment Details
                    </h3>

                    <dl className="divide-y divide-gray-200 dark:divide-gray-600">
                    <div style="display:flex; justify-content:space-between; padding:6px 0;">
                        <span><b>Brgy Official Name</b></span>
                        <span>${appointment.official}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; padding:6px 0;">
                        <span><b>Date</b></span>
                        <span>${appointment.date}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; padding:6px 0;">
                        <span><b>Time</b></span>
                        <span>${appointmentValues.timetable}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; padding:6px 0;">
                        <span><b>Day</b></span>
                        <span>${appointment.day}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; padding:6px 0;">
                        <span><b>Purpose</b></span>
                        <span>${appointmentValues.purpose}</span>
                    </div>
                    </dl>
                </section>
            `,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
        }).then(result => {
            if(result.isConfirmed){
                // submitBooking(appointment,appointmentValues);
            }
        });
    };
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
                        <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
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
                            <form ref={AptDetailsRef}>
                                <h3 className="text-lg text-center font-semibold text-gray-900 dark:text-white mb-3">
                                Appointment Details
                                </h3>
                                <dl className="divide-y divide-gray-200 dark:divide-gray-600">
                                <div className="py-2 flex justify-between">
                                    <dt className="font-medium text-gray-700 dark:text-gray-300">Brgy Official Name</dt>
                                    <dd name="official" className="text-gray-900 dark:text-gray-100">{appointment.official}</dd>
                                </div>
                                {/* <div className="py-2 flex justify-between">
                                    <dt className="font-medium text-gray-700 dark:text-gray-300">Appointment Date</dt>
                                    <dd className="text-gray-900 dark:text-gray-100">{appointment.date}</dd>
                                </div> */}
                                {/* <div className="py-2 flex justify-between">
                                    <dt className="font-medium text-gray-700 dark:text-gray-300">Appointment Day</dt>
                                    <dd className="text-gray-900 dark:text-gray-100">{appointment.day}</dd>
                                </div> */}
                                {/* <div className="py-2 flex justify-between">
                                    <dt className="font-medium text-gray-700 dark:text-gray-300">Available Time</dt>
                                    <dd className="text-gray-900 dark:text-gray-100">{appointment.time}</dd>
                                </div> */}
                                {/* <div className="pt-5 border-t border-default flex sm:flex-row flex-col sm:space-x-5 rtl:space-x-reverse"> */}
                                {/* <div inline-datepicker = "true" datepicker-buttons = "true" datepicker-autoselect-today = "true" className="mx-auto sm:mx-0"></div> */}
                                <div className='pt-5 border-t border-default flex sm:flex-row flex-col sm:space-x-5 rtl:space-x-reverse'>
                                    <div className="sm:ms-7 sm:ps-3 border-default w-full sm:max-w-[25rem] mt-5 sm:mt-0">
                                        <h3 className="text-heading text-base text-[var(--text)] font-medium mb-3 text-center">{appointment.day + " " + appointment.date}</h3>
                                        <button type="button" data-collapse-toggle="timetable" className="inline-flex items-center justify-center w-full text-body text-[var(--text)] bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                                            <svg className="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                                            Pick a time
                                        </button>
                                        <label className="sr-only">
                                        Pick a time
                                        </label>
                                        <ul name="time" id="timetable" className="hidden grid w-full grid-cols-2 gap-2 mt-5">
                                            <li>
                                                <input type="radio" id="10-am" value="10:00 AM" className="hidden peer" name="timetable"/>
                                                <label htmlFor="10-am" className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-[var(--text)] border-[var(--text)] peer-checked:border-[var(--brand)] peer-checked:bg-[var(--bg)] hover:text-[var(--text)] peer-checked:border-2 peer-checked:text-[var(--text)] hover:bg-[var(--bg)]">
                                                10:00 AM
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="10-30-am" value="10:30 AM" className="hidden peer" name="timetable"/>
                                                <label htmlFor="10-30-am"
                                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-[var(--text)] border-[var(--text)] peer-checked:border-[var(--brand)] peer-checked:bg-[var(--bg)] hover:text-[var(--text)] peer-checked:border-2 peer-checked:text-[var(--text)] hover:bg-[var(--bg)]">
                                                10:30 AM
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="11-am" value="11:00 AM" className="hidden peer" name="timetable"/>
                                                <label htmlFor="11-am"
                                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-[var(--text)] border-[var(--text)] peer-checked:border-[var(--brand)] peer-checked:bg-[var(--bg)] hover:text-[var(--text)] peer-checked:border-2 peer-checked:text-[var(--text)] hover:bg-[var(--bg)]">
                                                11:00 AM
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="11-30-am" value="11:30 AM" className="hidden peer" name="timetable"/>
                                                <label htmlFor="11-30-am"
                                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-[var(--text)] border-[var(--text)] peer-checked:border-[var(--brand)] peer-checked:bg-[var(--bg)] hover:text-[var(--text)] peer-checked:border-2 peer-checked:text-[var(--text)] hover:bg-[var(--bg)]">
                                                11:30 AM
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="12-am" value="12:00 AM" className="hidden peer" name="timetable" defaultChecked/>
                                                <label htmlFor="12-am"
                                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-[var(--text)] border-[var(--text)] peer-checked:border-[var(--brand)] peer-checked:bg-[var(--bg)] hover:text-[var(--text)] peer-checked:border-2 peer-checked:text-[var(--text)] hover:bg-[var(--bg)]">
                                                12:00 AM
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="12-30-pm" value="12:30 PM" className="hidden peer" name="timetable"/>
                                                <label htmlFor="12-30-pm"
                                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-[var(--text)] border-[var(--text)] peer-checked:border-[var(--brand)] peer-checked:bg-[var(--bg)] hover:text-[var(--text)] peer-checked:border-2 peer-checked:text-[var(--text)] hover:bg-[var(--bg)]">
                                                12:30 PM
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="1-pm" value="01:00 PM" className="hidden peer" name="timetable"/>
                                                <label htmlFor="1-pm"
                                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-[var(--text)] border-[var(--text)] peer-checked:border-[var(--brand)] peer-checked:bg-[var(--bg)] hover:text-[var(--text)] peer-checked:border-2 peer-checked:text-[var(--text)] hover:bg-[var(--bg)]">
                                                01:00 PM
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="1-30-pm" value="01:30 PM" className="hidden peer" name="timetable"/>
                                                <label htmlFor="1-30-pm"
                                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-[var(--text)] border-[var(--text)] peer-checked:border-[var(--brand)] peer-checked:bg-[var(--bg)] hover:text-[var(--text)] peer-checked:border-2 peer-checked:text-[var(--text)] hover:bg-[var(--bg)]">
                                                01:30 PM
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="2-pm" value="02:00 PM" className="hidden peer" name="timetable"/>
                                                <label htmlFor="2-pm"
                                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-[var(--text)] border-[var(--text)] peer-checked:border-[var(--brand)] peer-checked:bg-[var(--bg)] hover:text-[var(--text)] peer-checked:border-2 peer-checked:text-[var(--text)] hover:bg-[var(--bg)]">
                                                02:00 PM
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="2-30-pm" value="02:30 PM" className="hidden peer" name="timetable"/>
                                                <label htmlFor="2-30-pm"
                                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-[var(--text)] border-[var(--text)] peer-checked:border-[var(--brand)] peer-checked:bg-[var(--bg)] hover:text-[var(--text)] peer-checked:border-2 peer-checked:text-[var(--text)] hover:bg-[var(--bg)]">
                                                02:30 PM
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="3-pm" value="03:00 PM" className="hidden peer" name="timetable"/>
                                                <label htmlFor="3-pm"
                                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-[var(--text)] border-[var(--text)] peer-checked:border-[var(--brand)] peer-checked:bg-[var(--bg)] hover:text-[var(--text)] peer-checked:border-2 peer-checked:text-[var(--text)] hover:bg-[var(--bg)]">
                                                03:00 PM
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="3-30-pm" value="03:30 PM" className="hidden peer" name="timetable"/>
                                                <label htmlFor="3-30-pm"
                                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-[var(--text)] border-[var(--text)] peer-checked:border-[var(--brand)] peer-checked:bg-[var(--bg)] hover:text-[var(--text)] peer-checked:border-2 peer-checked:text-[var(--text)] hover:bg-[var(--bg)]">
                                                03:30 PM
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* </div> */}
                                </dl>


                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reason for Appointment</label>
                                    <select name="purpose" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option defaultValue="">Select category</option>
                                        <option defaultValue="" value="clearance">Barangay Clearance</option>
                                    </select>
                                </div>
                            </form>
                        </section>
                        
                    </div>
                    {/* Modal footer */}
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button onClick={() => bookAppt(appointment)} data-modal-hide="medium-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book</button>
                        <button data-modal-hide="medium-modal" type="button" onClick={onClose} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default GetAppointmentModal
