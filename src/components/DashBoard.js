import React from "react";
import FilterByUpcomingPast from "./FilterByUpcomingPast";
import FilterByDate from "./FilterByDate";
import StatusFilter from "./StatusFilter";
import TableData from "./TableData";
import { useState } from "react";
import Axios from "axios";
import { ROOT_URL } from "../utils/constants";
import { useEffect } from "react";
import { dataFilter } from "../utils";

function DashBoard() {
  const [launchDetails, setLaunchDetails] = useState("");
  const [searchLaunches, setSearchLaunches] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filterData = () => {
    Axios.get(ROOT_URL + `${searchLaunches}`)
      .then(({ data }) => setLaunchDetails(data))
      .catch((_err) => setLaunchDetails(""));
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line
  }, [searchLaunches]);

  useEffect(() => {
    dataFilter(startDate, endDate, searchLaunches, setSearchLaunches);
    // eslint-disable-next-line
  }, [startDate, endDate]);

  return (
    <div className="container mx-auto sm:container mt-16">
      <div className="text-center flex justify-center">
        <FilterByUpcomingPast setSearchLaunches={setSearchLaunches} />
      </div>
      <div className="flex justify-between items-center py-4">
        <FilterByDate
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <StatusFilter />
      </div>
      <TableData launchDetails={launchDetails} />
    </div>
  );
}

export default DashBoard;
