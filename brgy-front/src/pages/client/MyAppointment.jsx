import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import GetAppointmentModal from '../../components/clientModal/GetAppointmentModal';

const MyAppointment = () => {
    // const tableRef = useRef(null);
    const [open, setOpen] = useState(false);

  useEffect(() => {
    // init Flowbite (from CDN), safe-guarded
    window?.initFlowbite?.();

     // init simple-datatables (from CDN)
    const dataTable = new window.simpleDatatables.DataTable("#myappointment-table", {
	searchable: true,
	fixedHeight: true,
    })

    // event delegation: catch clicks inside the table
    // const onClick = (e) => {
    //     const getAppoinmentBtn = e.target.closest("[data-getappointmentmodal]");
    //     if (getAppoinmentBtn) setOpen(true); //opens my modal
    // };

     // if the user clicks anyware in the document, onClick function will run
    // document.addEventListener("click", onClick);

    // for cleanup. 
    // return () => {
    //     document.removeEventListener("click", onClick);
    //     dataTable?.destroy();
    // };

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
                                    Available time
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
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Flowbite</td>
                            <td>2021/25/09</td>
                            <td>269000</td>
                            <td>49%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">React</td>
                            <td>2013/24/05</td>
                            <td>4500000</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Angular</td>
                            <td>2010/20/09</td>
                            <td>2800000</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Vue</td>
                            <td>2014/12/02</td>
                            <td>3600000</td>
                            <td>30%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Svelte</td>
                            <td>2016/26/11</td>
                            <td>1200000</td>
                            <td>57%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Ember</td>
                            <td>2011/08/12</td>
                            <td>500000</td>
                            <td>44%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Backbone</td>
                            <td>2010/13/10</td>
                            <td>300000</td>
                            <td>9%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">jQuery</td>
                            <td>2006/28/01</td>
                            <td>6000000</td>
                            <td>5%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Bootstrap</td>
                            <td>2011/19/08</td>
                            <td>1800000</td>
                            <td>12%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Foundation</td>
                            <td>2011/23/09</td>
                            <td>700000</td>
                            <td>8%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Bulma</td>
                            <td>2016/24/10</td>
                            <td>500000</td>
                            <td>7%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Next.js</td>
                            <td>2016/25/10</td>
                            <td>2300000</td>
                            <td>45%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Nuxt.js</td>
                            <td>2016/16/10</td>
                            <td>900000</td>
                            <td>50%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Meteor</td>
                            <td>2012/17/01</td>
                            <td>1000000</td>
                            <td>10%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Aurelia</td>
                            <td>2015/08/07</td>
                            <td>200000</td>
                            <td>20%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Inferno</td>
                            <td>2016/27/09</td>
                            <td>100000</td>
                            <td>35%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Preact</td>
                            <td>2015/16/08</td>
                            <td>600000</td>
                            <td>28%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Lit</td>
                            <td>2018/28/05</td>
                            <td>400000</td>
                            <td>60%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Alpine.js</td>
                            <td>2019/02/11</td>
                            <td>300000</td>
                            <td>70%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Stimulus</td>
                            <td>2018/06/03</td>
                            <td>150000</td>
                            <td>25%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                            <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Solid</td>
                            <td>2021/05/07</td>
                            <td>250000</td>
                            <td>80%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
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

export default MyAppointment
