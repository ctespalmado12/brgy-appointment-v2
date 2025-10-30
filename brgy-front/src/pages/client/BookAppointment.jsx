import React, { useState } from 'react'
import { useEffect } from 'react';
import GetAppointmentModal from '../../components/clientModal/GetAppointmentModal';

const BookAppointment = () => {
    const [open, setOpen] = useState(false);
    // const [bookSelectedAppointment, setBookSelectedAppointment] = useState[null];

    const appointmentList = [
    {
        official: "Maria L. Dizon",
        position: "Barangay Captain",
        date: "February 14, 2025",
        day: "Friday",
        time: "9:00 AM – 11:00 AM"
    },
    {
        official: "Roberto S. Manalili",
        position: "Kagawad",
        date: "March 3, 2025",
        day: "Monday",
        time: "1:00 PM – 3:00 PM"
    },
    {
        official: "Janice P. Alvaro",
        position: "Treasurer",
        date: "January 22, 2025",
        day: "Wednesday",
        time: "10:00 AM – 12:00 PM"
    },
    {
        official: "Jerome C. Bautista",
        position: "Secretary",
        date: "April 5, 2025",
        day: "Saturday",
        time: "8:00 AM – 10:00 AM"
    },
    {
        official: "Allan R. Gonzales",
        position: "Kagawad",
        date: "February 18, 2025",
        day: "Tuesday",
        time: "2:00 PM – 4:00 PM"
    },
    {
        official: "Liza M. Rosario",
        position: "SK Chairperson",
        date: "March 27, 2025",
        day: "Thursday",
        time: "9:00 AM – 11:30 AM"
    },
    {
        official: "Michael T. Ramos",
        position: "SK Kagawad",
        date: "February 9, 2025",
        day: "Sunday",
        time: "3:00 PM – 5:00 PM"
    },
    {
        official: "Cynthia V. Santos",
        position: "Kagawad",
        date: "April 11, 2025",
        day: "Friday",
        time: "1:30 PM – 3:30 PM"
    },
    {
        official: "Ernesto G. Umali",
        position: "Chief Tanod",
        date: "March 8, 2025",
        day: "Tuesday",
        time: "7:00 AM – 9:00 AM"
    },
    {
        official: "Rica A. Villaflor",
        position: "Barangay Health Worker",
        date: "January 15, 2025",
        day: "Wednesday",
        time: "8:30 AM – 10:00 AM"
    }
];

  useEffect(() => {
    // init Flowbite (from CDN), safe-guarded
    window?.initFlowbite?.();

     // init simple-datatables (from CDN)
    const dataTable = new window.simpleDatatables.DataTable("#bookappointment-table", {
	searchable: true,
	fixedHeight: true,
    })

    // event delegation: catch clicks inside the table
    const onClick = (e) => {
        const getAppoinmentBtn = e.target.closest("[data-getappointmentmodal]");
        // const tr =e.target.closest("tr");
        // if(!tr) return;
        // const cells = tr.querySelectorAll("td");
        // const appointmentList = {
        //     official: cells[0]?.textContent.trim(),
        //     date: cells[1]?.textContent.trim(),
        //     time: cells[2]?.textContent.trim(),
        //     day: cells[3]?.textContent.trim(),
        //     status: cells[4]?.textContent.trim(),
        //     purpose: cells[5]?.textContent.trim(),
        // }

        if (getAppoinmentBtn)
            setOpen(true); //opens my modal
    };

     // if the user clicks button in the document, onClick function will run
    document.addEventListener("click", onClick);

    // for cleanup. 
    return () => {
        document.removeEventListener("click", onClick);
        dataTable?.destroy();
    };

  }, []);
  return (
    <>
        <div className="sm:ml-64">
            <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
                        {/* Caption (Title) */}
                        <h1 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                        Brgy Official Schedule List
                        </h1>
                    </div>
                </div>
                          
                <table id="bookappointment-table">
                    <thead>
                        <tr>
                            <th>
                                <span className="flex items-center">
                                    Barangay Official Name
                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                    </svg>
                                </span>
                            </th>
                            <th>
                                <span className="flex items-center">
                                    Position
                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                    </svg>
                                </span>
                            </th>
                            <th data-type="date" data-format="YYYY/DD/MM">
                                <span className="flex items-center">
                                    Appointment Date
                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                    </svg>
                                </span>
                            </th>
                            <th>
                                <span className="flex items-center">
                                    Appointment Day
                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                    </svg>
                                </span>
                            </th>
                            <th>
                                <span className="flex items-center">
                                    Available time
                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                    </svg>
                                </span>
                            </th>
                            <th>
                                <span className="flex items-center">
                                    Action
                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                    </svg>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointmentList.map((data) =>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                                <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">{data.official}</td>
                                <td>{data.position}</td>
                                <td>{data.date}</td>
                                <td>{data.day}</td>
                                <td>{data.time}</td>
                                <td className="px-6 py-4">
                                    <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                                </td>
                            </tr>
                        )}
                        
                    </tbody>
                </table>



            </div>
            
            
        </div>

        {open &&(
            <GetAppointmentModal onClose={() => setOpen(false)} />
        )}

    </>
  )
}

export default BookAppointment
