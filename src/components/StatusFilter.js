import React from "react";

function StatusFilter({ setStatusFilter }) {
  const handleClick = (values) => {
    console.log(values, "status fired!");
    if (values === "all") {
      values = "";
    } else if (values === "true") {
      values = "launch_success=true";
    } else if (values === "false") {
      values = "launch_success=false";
    }
    setStatusFilter(values);
  };

  return (
    <div className="flex ml-6 items-center">
      <div className="relative">
        <select
          className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-10 cursor-pointer"
          defaultValue="all"
          onChange={(event) => handleClick(event.target.value)}
        >
          <option value="all">All</option>
          <option value="true">Successful Launches</option>
          <option value="false">Failed Launches</option>
        </select>
        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default StatusFilter;
