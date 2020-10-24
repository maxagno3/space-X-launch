import React from "react";

const launchStatus = [
  { text: "All", value: "All" },
  {
    text: "Successful Launches",
    value: "true",
  },
  { text: "Failed Launches", value: "false" },
];

function StatusFilter({ statusFilter, setStatusFilter }) {
  const handleClick = (value) => {
    // if (value === "all") {
    //   value = "";
    // } else if (value === "true") {
    //   value = "launch_success=true";
    // } else if (value === "false") {
    //   value = "launch_success=false";
    // }
    console.log(value, "value");
    setStatusFilter(value);
  };

  return (
    <div className="flex ml-6 items-center">
      <div className="relative">
        <select
          className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-10 cursor-pointer text-black"
          value={statusFilter}
          onChange={(event) => handleClick(event.target.value)}
        >
          {/* <option value="All">All</option>
          <option value="Successful Launches">Successful Launches</option>
          <option value="Failed Launches">Failed Launches</option> */}
          {launchStatus.map((statusValue) => {
            return (
              <option value={statusValue.value}>{statusValue.text}</option>
            );
          })}
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
