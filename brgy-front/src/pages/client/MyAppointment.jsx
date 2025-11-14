import React, { use, useRef, useState } from 'react'
import { useEffect } from 'react';
import GetAppointmentModal from '../../components/clientModal/GetAppointmentModal';
import MyAppointmentModal from '../../components/clientModal/MyAppointmentModal';


const myAppointmentData = [
  {
    apptNo: "BRGY-2025-0001",
    official: "Hon. Maria Santos",
    dateISO: "2025-10-27",
    dateLabel: "Oct 27, 2025",
    time: "09:30 AM",
    day: "Monday",
    status: "Approved",
    purpose: "Barangay Clearance",
    comment: "comment kkkk"
  },
  {
    apptNo: "BRGY-2025-0002",
    official: "Hon. Roberto Cruz",
    dateISO: "2025-10-29",
    dateLabel: "Oct 29, 2025",
    time: "02:00 PM",
    day: "Wednesday",
    status: "Pending",
    purpose: "Residency Certificate",
    comment: "comment xxxx"
  },
];

const MyAppointment = () => {
    // const tableRef = useRef(null);
    const [openMyAppointementModal, setMyAppointmentModalOpen] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    useEffect(() => {
    // init Flowbite (from CDN)
    // window?.initFlowbite?.();

     // init simple-datatables (from CDN)
    // const dataTable = new window.simpleDatatables.DataTable("#myappointment-table", {
    //     searchable: true,
    //     fixedHeight: true,
    // })
    
    const tbody = document.querySelector("#myappointment-table tbody")
    
    const handleRowClick = (e) => {
        const tr = e.target.closest("tr");
        if (!tr) return;

        const cells = tr.querySelectorAll("td");
        const appointment = {
            no: cells[0]?.textContent.trim(),
            official: cells[1]?.textContent.trim(),
            date: cells[2]?.textContent.trim(),
            time: cells[3]?.textContent.trim(),
            day: cells[4]?.textContent.trim(),
            status: cells[5]?.textContent.trim(),
            purpose: cells[6]?.textContent.trim(),
            comment: cells[7]?.textContent.trim(),
      };

            setSelectedAppointment(appointment);
            setMyAppointmentModalOpen(true); // your modal opener
            
    };

    tbody?.addEventListener("click", handleRowClick);
    


  }, []);
  return (
    <>
        <div className="sm:ml-64">
            <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
                        {/* Caption (Title) */}
                        <h1 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                        My Appointment List
                        </h1>
                    </div>
                </div>

                <table id="myappointment-table">
                    <thead>
                        <tr>
                            <th>
                                <span className="flex items-center">
                                    Appointment No.
                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                    </svg>
                                </span>
                            </th>
                            <th>
                                <span className="flex items-center">
                                    Barangay Official Name
                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                    </svg>
                                </span>
                            </th>
                            <th data-type="date" data-format="YYYY/DD/MM">
                                <span className="flex items-center">
                                    Date
                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                    </svg>
                                </span>
                            </th>
                            <th>
                                <span className="flex items-center">
                                    Time
                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                    </svg>
                                </span>
                            </th>
                            <th>
                                <span className="flex items-center">
                                    Day
                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                    </svg>
                                </span>
                            </th>
                            <th>
                                <span className="flex items-center">
                                    Status
                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                    </svg>
                                </span>
                            </th>
                            <th>
                                <span className="flex items-center">
                                    Purpose
                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                    </svg>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       {myAppointmentData.map((data) =>
                        <tr key={data.apptNo} className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">{data.apptNo}</td>
                            <td>{data.official}</td>
                            <td data-sort={data.dateISO}>{data.dateLabel}</td>
                            <td>{data.time}</td>
                            <td>{data.day}</td>
                            <td>{data.status}</td>
                            <td>{data.purpose}</td>
                            <td hidden>{data.comment}</td>
                        </tr>
                    )} 
                    </tbody>
                </table>
            </div>
        </div>

        {openMyAppointementModal &&(
            <MyAppointmentModal 
            appointment ={selectedAppointment}
            onClose = {() => setMyAppointmentModalOpen(false)}/>
        )}

    </>
  )
}

export default MyAppointment
