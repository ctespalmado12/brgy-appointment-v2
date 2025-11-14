// GlobalDataTables.jsx
import React, { useLayoutEffect, useRef } from "react";
import { DataTable } from "simple-datatables";           // ✅ use the module, not window
import "simple-datatables/dist/style.css";               // ✅ include the CSS once in your app

const GlobalDataTables = ({ tableName, header = [], rows = [], onGetAppointment }) => {
  const tableRef = useRef(null);
  const dtRef = useRef(null);

  useLayoutEffect(() => {
    const el = tableRef.current;
    if (!el) return;

    // Destroy any previous instance (StrictMode dev double-mount safety)
    try { dtRef.current?.destroy(); } catch {}

    dtRef.current = new DataTable(el, {
      searchable: true,
      perPage: 10,
      fixedHeight: true,
      layout: { top: "{search}", bottom: "{select}{info}{pager}" },
    });

    // sanity logs against THIS table
    const wrap = el.closest(".dataTable-wrapper");
    console.log("DT initialized:", dtRef.current.initialized);
    console.log("wrapper?", !!wrap);
    console.log("top?", !!wrap?.querySelector(".dataTable-top"));
    console.log("bottom?", !!wrap?.querySelector(".dataTable-bottom"));

    // delegate clicks only inside THIS table
    const onClick = (e) => {
      const btn = e.target.closest("[data-getappointmentmodal]");
      if (!btn || !el.contains(btn)) return;
      if (typeof onGetAppointment === "function") onGetAppointment();
    };
    el.addEventListener("click", onClick);

    return () => {
      el.removeEventListener("click", onClick);          // ✅ cleanup
      try { dtRef.current?.destroy(); } catch {}
      dtRef.current = null;
    };
  }, [rows.length, onGetAppointment]);                   // reinit if row count changes

  return (
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
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                <td className="font-medium text-gray-900 dark:text-white">{r.official}</td>
                <td>{r.position}</td>
                <td>{r.date}</td>
                <td>{r.day}</td>
                <td>{r.time}</td>
                <td className="px-6 py-4">
                  <button data-getappointmentmodal className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Get appointment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GlobalDataTables;
