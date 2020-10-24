import React from "react";

function FilterByUpcomingPast({ timeline, setTimeline }) {
  const handleChange = (value) => {
    // if (value === "all") {
    //   value = "";
    // }
    setTimeline(value);
  };

  return (
    <div className="flex items-center">
      <div className="relative w-full">
        <h1>Filter by launches</h1>
        <select
          className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-10 text-black cursor-pointer"
          value={timeline}
          onChange={(event) => handleChange(event.target.value)}
        >
          <option value="all">All</option>
          <option value="upcoming">Upcoming Launches</option>
          <option value="past">Past Launches</option>
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

export default FilterByUpcomingPast;
