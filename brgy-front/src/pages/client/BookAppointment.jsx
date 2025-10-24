import React, { useState } from 'react'
import { useEffect } from 'react';
import GetAppointmentModal from '../../components/clientModal/GetAppointmentModal';

const BookAppointment = () => {
    const [open, setOpen] = useState(false);

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
        if (getAppoinmentBtn) setOpen(true); //opens my modal
    };

     // if the user clicks anyware in the document, onClick function will run
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
                {/* <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="flex items-center pl-2 h-15 rounded-sm bg-gray-50 dark:bg-gray-800">
                        
                        <div className="relative w-full sm:w-auto">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                                >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="table-search"
                                className="block w-full sm:w-80 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search for Schedule"
                            />
                        </div>
                    </div>
                        
                </div> */}
                    {/* <div className='overflow-y-auto'>
                        <table className="w-full text-sm text-left rtl:text-center text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Brgy Official Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Position
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center">
                                            Appointment Date
                                            <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                            </svg></a>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center">
                                            Appointment Day
                                            <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                            </svg></a>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center">
                                            Available Time
                                            <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                            </svg></a>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </td>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button onClick={() => setOpen(true)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </td>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</a>
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </td>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </td>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</a>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div> */}

                    
                    
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
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Flowbite</td>
                            <td>2021/25/09</td>
                            <td>269000</td>
                            <td>49%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">React</td>
                            <td>2013/24/05</td>
                            <td>4500000</td>
                            <td></td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Angular</td>
                            <td>2010/20/09</td>
                            <td>2800000</td>
                            <td></td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Vue</td>
                            <td>2014/12/02</td>
                            <td>3600000</td>
                            <td>30%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Svelte</td>
                            <td>2016/26/11</td>
                            <td>1200000</td>
                            <td>57%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Ember</td>
                            <td>2011/08/12</td>
                            <td>500000</td>
                            <td>44%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Backbone</td>
                            <td>2010/13/10</td>
                            <td>300000</td>
                            <td>9%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">jQuery</td>
                            <td>2006/28/01</td>
                            <td>6000000</td>
                            <td>5%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Bootstrap</td>
                            <td>2011/19/08</td>
                            <td>1800000</td>
                            <td>12%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Foundation</td>
                            <td>2011/23/09</td>
                            <td>700000</td>
                            <td>8%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Bulma</td>
                            <td>2016/24/10</td>
                            <td>500000</td>
                            <td>7%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Next.js</td>
                            <td>2016/25/10</td>
                            <td>2300000</td>
                            <td>45%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Nuxt.js</td>
                            <td>2016/16/10</td>
                            <td>900000</td>
                            <td>50%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Meteor</td>
                            <td>2012/17/01</td>
                            <td>1000000</td>
                            <td>10%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Aurelia</td>
                            <td>2015/08/07</td>
                            <td>200000</td>
                            <td>20%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Inferno</td>
                            <td>2016/27/09</td>
                            <td>100000</td>
                            <td>35%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Preact</td>
                            <td>2015/16/08</td>
                            <td>600000</td>
                            <td>28%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Lit</td>
                            <td>2018/28/05</td>
                            <td>400000</td>
                            <td>60%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Alpine.js</td>
                            <td>2019/02/11</td>
                            <td>300000</td>
                            <td>70%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Stimulus</td>
                            <td>2018/06/03</td>
                            <td>150000</td>
                            <td>25%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Solid</td>
                            <td>2021/05/07</td>
                            <td>250000</td>
                            <td>80%</td>
                            <td></td>
                            <td className="px-6 py-4">
                                <button data-getappointmentmodal="1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Get appointment</button>
                            </td>
                        </tr>
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
