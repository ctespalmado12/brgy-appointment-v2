import React, { useState } from 'react'
// import { useEffect } from 'react';
import GetAppointmentModal from '../../components/clientModal/GetAppointmentModal';
import GlobalDataTables from '../../components/globaldatatables';

const BookAppointment = () => {
    const [open, setOpen] = useState(false);
    const [bookSelectedAppointment, setBookSelectedAppointment] = useState(null);

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
    "Brgy Official Name",
    "Position",
    "Appointment Date",
    "Appointment Day",
    "Available time",
    "Action",
    ];

    const columns = ["official", "position", "date", "day", "time"];
  return (
    <>
        <GlobalDataTables
            tableName="bookappointment-table"
            header = {headers}
            rows = {appointmentList}
            columns = {columns}
            onGetAppointment={() => setOpen(true)}
            onRowSelect={(row) => {
                setBookSelectedAppointment(row);
                setOpen(true);
            }}
        />
        
        {open &&(
            <GetAppointmentModal 
                appointment = {bookSelectedAppointment}
                onClose={() => setOpen(false)} />
        )}

    </>
  )
}

export default BookAppointment
