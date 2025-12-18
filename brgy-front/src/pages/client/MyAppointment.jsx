import React, { useState } from 'react'
import { useEffect } from 'react';
import GetAppointmentModal from '../../components/clientModal/GetAppointmentModal';
import MyAppointmentModal from '../../components/clientModal/MyAppointmentModal';
import GlobalDataTables from '../../components/globaldatatables';


const myAppointmentData = [
  {
    apptNo: "BRGY-2025-0001",
    official: "Hon. Maria Santos",
    dateISO: "2025-10-27",
    date: "Oct 27, 2025",
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
    date: "Oct 29, 2025",
    time: "02:00 PM",
    day: "Wednesday",
    status: "Pending",
    purpose: "Residency Certificate",
    comment: "comment xxxx"
  },
];

const headers = [
    "Appointment No.",
    "Barangay Official Name",
    "Date",
    "Time",
    "Day",
    "Purpose",
    "Status"
];

const columns = ["apptNo", "official", "date", "time", "day", "purpose", "status"];

const MyAppointment = () => {
    // const tableRef = useRef(null);
    const [openMyAppointementModal, setMyAppointmentModalOpen] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    
  return (
    <>
   
        <GlobalDataTables
            tableName="myappointment-table"
            header = {headers}
            rows = {myAppointmentData}
            columns = {columns}
            onRowSelect={(row) => {
                // row is the original object from rows[]
                setSelectedAppointment(row);
                setMyAppointmentModalOpen(true);
            }}
        />

        {openMyAppointementModal &&(
            <MyAppointmentModal 
            appointment ={selectedAppointment}
            onClose = {() => setMyAppointmentModalOpen(false)}/>
        )}

    </>
  )
}

export default MyAppointment
