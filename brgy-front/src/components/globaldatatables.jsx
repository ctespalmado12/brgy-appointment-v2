// GlobalDataTables.jsx
import React, { useEffect, useRef } from "react";
import { DataTable } from "simple-datatables";           // ✅ use the module, not window
import "simple-datatables/dist/style.css";               // ✅ include the CSS once in your app

const GlobalDataTables = ({ tableName, header = [], rows = [], columns = [], onGetAppointment, onRowSelect }) => {
  const tableRef = useRef(null);
  const dtRef = useRef(null);

  // Init & destroy DataTable (once)
  useEffect(() => {
    const el = tableRef.current;
    if (!el) return;

    dtRef.current = new DataTable(el, {
      searchable: true,
      perPage: 10,
      fixedHeight: true,
      layout: { top: "{search}", bottom: "{select}{info}{pager}" },
    });

    return () => {
      try { dtRef.current?.destroy(); } catch {}
      dtRef.current = null;
    };
  }, []);
// end

  useEffect(() => {
    const el = tableRef.current;
    if (!el) return;

    
    const onClick = (e) => {
      // For get appointment button
      if(tableName == "bookappointment-table"){
        // console.log("book");

        const btn = e.target.closest("[data-getappointmentmodal]");
        if (!btn) return;
        if (typeof onGetAppointment === "function"){
          const tr = btn.closest("tr");
          const index = tr.getAttribute("data-row-index");
          const rowObj = rows[index];

          onRowSelect(rowObj);
          onGetAppointment()
        }
      }
      

      // For my appointment row clicks
      if(tableName == "myappointment-table"){
        const tr = e.target.closest("tr");
        
        if(tr && tr?.hasAttribute("data-row-index") && el.contains(tr) && typeof onRowSelect === "function"){
          const index = tr.getAttribute("data-row-index");
          const rowObj = rows[index];

          onRowSelect(rowObj);

        }
      }
      
    };
    
    el.addEventListener("click", onClick);

    return () => {
      el.removeEventListener("click", onClick);       
    };
  },[onGetAppointment, onRowSelect, rows, tableName]);                    // reinit if row count changes

  return (
    <>
      <div className="sm:ml-64">
        <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
              <h1 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                Brgy Official Schedule List
              </h1>
            </div>
          </div>

          <table id={tableName} ref={tableRef} className="w-full text-sm">
            <thead>
              <tr>
                {header.map((th, i) => (
                  <th key={i}>
                    <span className="flex items-center">
                      {th}
                      <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                      </svg>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} data-row-index={i} className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                  {columns.map((colKey) => (
                    <td key={colKey} >
                      {row[colKey]}
                    </td>
                  ))}
                  {/* <td className="font-medium text-gray-900 dark:text-white">{r.official}</td>
                  <td>{r.position}</td>
                  <td>{r.date}</td>
                  <td>{r.day}</td>
                  <td>{r.time}</td> */}
                  {tableName == "bookappointment-table" ? (
                    <td className="px-6 py-4">
                      <button data-modal-target="medium-modal" data-modal-toggle="medium-modal" data-getappointmentmodal className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Get appointment
                      </button>
                    </td>
                  ) : null}

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
    
  );
};

export default GlobalDataTables;
