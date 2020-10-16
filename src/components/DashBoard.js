import React from "react";
import FilterByUpcomingPast from "./FilterByUpcomingPast";
import FilterByDate from "./FilterByDate";
import StatusFilter from "./StatusFilter";
import TableData from "./TableData";
import { useState } from "react";
import Axios from "axios";
import { ROOT_URL } from "../utils/constants";
import { useEffect } from "react";

function DashBoard() {
  const [launchDetails, setLaunchDetails] = useState("");
  const [searchLaunches, setSearchLaunches] = useState("");

  const filterData = () => {
    Axios.get(ROOT_URL + `${searchLaunches}`)
      .then(({ data }) => setLaunchDetails(data))
      .catch((_err) => setLaunchDetails(""));
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line
  }, [searchLaunches]);

  return (
    <div className="container mx-auto sm:container mt-16">
      <div className="text-center flex justify-center">
        <FilterByUpcomingPast setSearchLaunches={setSearchLaunches} />
      </div>
      <div className="flex justify-between items-center py-4">
        <FilterByDate />
        <StatusFilter />
      </div>
      <TableData launchDetails={launchDetails} />
    </div>
  );
}

export default DashBoard;
