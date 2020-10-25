import React from "react";
import FilterByUpcomingPast from "./FilterByUpcomingPast";
import FilterByDate from "./FilterByDate";
import StatusFilter from "./StatusFilter";
import TableData from "./TableData";
import { useState } from "react";
import Axios from "axios";
import { ROOT_URL } from "../utils/constants";
import { useEffect } from "react";
import { dataFilter, getParamsFromUrl } from "../utils";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";
import RocketImage from "./RocketImage";

function DashBoard(props) {
  let urlTimeline;
  let urlStartDate;
  let urlEndDate;
  let urlStatusFilter;
  urlTimeline = props.location.pathname.substring(1) || "";
  const data = getParamsFromUrl(props.location.search);

  if (data !== undefined) {
    if (data.length === 3) {
      urlStartDate = data[0];
      urlEndDate = data[1];
      urlStatusFilter = data[2];
    } else if (data.length === 2) {
      urlStartDate = data[0];
      urlEndDate = data[1];
    } else if (data.length === 1) {
      urlStatusFilter = data[0];
    }
  }
  // console.log(data, "data arriving!");
  console.log(urlEndDate, urlStartDate);

  const [launchDetails, setLaunchDetails] = useState("");
  // const [searchLaunches, setSearchLaunches] = useState("");
  const [timeline, setTimeline] = useState(urlTimeline || "");
  const [startDate, setStartDate] = useState("");
  const [statusFilter, setStatusFilter] = useState(urlStatusFilter || "");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);

  const filterData = (searchLaunches) => {
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
    // window.history.pushState(null, null, `${searchLaunches}`);
  };

  // useEffect(() => {
  //   filterData();
  //   // eslint-disable-next-line
  // }, [searchLaunches]);

  useEffect(() => {
    let term = dataFilter(timeline, startDate, endDate, statusFilter);
    filterData(term);
    props.history.push(term);
    // eslint-disable-next-line
  }, [timeline, startDate, endDate, statusFilter]);

  if (loading) {
    return (
      <div className="flex justify-center items-center fixed top- 0 h-full w-full bg-gray-200 bg-opacity-25">
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  return (
    <>
      <RocketImage />
      <div className="container mx-auto sm:container pt-16">
        <div className="text-center flex justify-center">
          <FilterByUpcomingPast timeline={timeline} setTimeline={setTimeline} />
        </div>
        <div className="flex justify-between items-center py-4">
          <FilterByDate
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
          <StatusFilter
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
        </div>
        <TableData launchDetails={launchDetails} />
      </div>
    </>
  );
}

export default withRouter(DashBoard);
