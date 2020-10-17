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
import Loader from "react-loader-spinner";

function DashBoard() {
  const [launchDetails, setLaunchDetails] = useState("");
  const [searchLaunches, setSearchLaunches] = useState("");
  const [startDate, setStartDate] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);

  const filterData = () => {
    setLoading(true);
    Axios.get(ROOT_URL + `${searchLaunches}`)
      .then(({ data }) => {
        setLaunchDetails(data);
        setLoading(false);
      })
      .catch((_err) => {
        setLaunchDetails("");
        setLoading(false);
      });
  };

  console.log(statusFilter, "status filtered");

  useEffect(() => {
    filterData();
    // eslint-disable-next-line
  }, [searchLaunches]);

  useEffect(() => {
    dataFilter(
      startDate,
      endDate,
      searchLaunches,
      setSearchLaunches,
      statusFilter
    );
    // eslint-disable-next-line
  }, [startDate, endDate, statusFilter]);

  if (loading) {
    return (
      <div className="flex justify-center items-center fixed top- 0 h-full w-full bg-gray-200 bg-opacity-25">
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  return (
    <div className="container mx-auto sm:container pt-16">
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
        <StatusFilter setStatusFilter={setStatusFilter} />
      </div>
      <TableData launchDetails={launchDetails} />
    </div>
  );
}

export default DashBoard;
