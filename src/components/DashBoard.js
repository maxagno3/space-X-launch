import React from "react";
import FilterByUpcomingPast from "./FilterByUpcomingPast";
import FilterByDate from "./FilterByDate";
import FilterSuccessFail from "./FilterSuccessFail";
import TableData from "./TableData";

function DashBoard() {
  return (
    <div className="container mx-auto sm:container">
      <FilterByUpcomingPast />
      <div className="flex justify-between p-10">
        <div className="pt-2 pb-2">
          <FilterByDate />
        </div>
        <FilterSuccessFail />
      </div>

      <TableData />
    </div>
  );
}

export default DashBoard;
