import React from "react";
import FilterByUpcomingPast from "./FilterByUpcomingPast";
import FilterByDate from "./FilterByDate";
import FilterSuccessFail from "./FilterSuccessFail";
import TableData from "./TableData";

function DashBoard() {
  return (
    <div className="container mx-auto sm:container mt-16">
      <div className="text-center flex justify-center">
        <FilterByUpcomingPast />
      </div>
      <div className="flex justify-between items-center py-4">
        <FilterByDate />
        <FilterSuccessFail />
      </div>
      <TableData />
    </div>
  );
}

export default DashBoard;
