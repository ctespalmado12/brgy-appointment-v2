import React, { useState } from 'react'
// import { useEffect } from 'react';
import GetAppointmentModal from '../../components/clientModal/GetAppointmentModal';
import GlobalDataTables from '../../components/globaldatatables';

const BookAppointment = () => {
    const [open, setOpen] = useState(false);
//     // const [bookSelectedAppointment, setBookSelectedAppointment] = useState[null];

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

const headers = [
  "Brgy Official Schedule List", // official
  "Position",                    // position
  "Appointment Date",            // date
  "Appointment Day",             // day
  "Available time",              // time
  "Action",                      // (button col)
];

//   useEffect(() => {
//     // init Flowbite (from CDN), safe-guarded
//     // window?.initFlowbite?.();

//      // init simple-datatables (from CDN)
//     const dataTable = new window.simpleDatatables.DataTable("#bookappointment-table", {
// 	searchable: true,
// 	fixedHeight: true,
//     })

//     // event delegation: catch clicks inside the table
//     const onClick = (e) => {
//         const getAppoinmentBtn = e.target.closest("[data-getappointmentmodal]");
//         // const tr =e.target.closest("tr");
//         // if(!tr) return;
//         // const cells = tr.querySelectorAll("td");
//         // const appointmentList = {
//         //     official: cells[0]?.textContent.trim(),
//         //     date: cells[1]?.textContent.trim(),
//         //     time: cells[2]?.textContent.trim(),
//         //     day: cells[3]?.textContent.trim(),
//         //     status: cells[4]?.textContent.trim(),
//         //     purpose: cells[5]?.textContent.trim(),
//         // }

//         if (getAppoinmentBtn)
//             setOpen(true); //opens my modal
//     };

//      // if the user clicks button in the document, onClick function will run
//     document.addEventListener("click", onClick);

//     // for cleanup. 
//     return () => {
//         document.removeEventListener("click", onClick);
//         dataTable?.destroy();
//     };

//   }, []);
  return (
    <>
        <GlobalDataTables
            tableName="bookappointment-table"
            header = {headers}
            rows = {appointmentList}
            
        />
        

        {open &&(
            <GetAppointmentModal onClose={() => setOpen(false)} />
        )}

    </>
  )
}

export default BookAppointment
