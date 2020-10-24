import moment from "moment";

// export const dataFilter = (
//   startDate,
//   endDate,
//   searchLaunches,
//   setSearchLaunches,
//   statusFilter
// ) => {
//   console.log(searchLaunches, startDate, endDate, 'hello');
//   if (searchLaunches && !(startDate || endDate)) {
//     setSearchLaunches(searchLaunches);

//   }
//   if (searchLaunches && startDate && !endDate && !statusFilter) {
//       console.log(searchLaunches, startDate, "start-date");
//       startDate = moment(startDate).format("YYYY-MM-DD");
//       setSearchLaunches(`${searchLaunches}?start=${startDate}&end=2029-10-17`);

//   }
//   if (searchLaunches && !startDate && endDate && !statusFilter) {
//     console.log(endDate, "end-date");
//     endDate = moment(endDate).format("YYYY-MM-DD");
//     setSearchLaunches(`${searchLaunches}?start=2029-10-17&end=${endDate}`);

//   }
//   if (startDate && endDate && !statusFilter) {
//     startDate = moment(startDate).format("YYYY-MM-DD");
//     endDate = moment(endDate).format("YYYY-MM-DD");
//     setSearchLaunches(`?start=${startDate}&end=${endDate}`);

//   }
//   if (!startDate && endDate) {
//     endDate = moment(endDate).format('YYYY-MM-DD')
//     setSearchLaunches(`?start=2029-10-17&end=${endDate}`)
//   }
//   if (searchLaunches && startDate && endDate && statusFilter) {
//     startDate = moment(startDate).format("YYYY-MM-DD");
//     endDate = moment(endDate).format("YYYY-MM-DD");
//     setSearchLaunches(`${searchLaunches}?start=${startDate}&end=${endDate}&${statusFilter}`);

//   }
//   if (startDate && !endDate && !statusFilter) {
//     startDate = moment(startDate).format("YYYY-MM-DD");
//     setSearchLaunches(`?start=${startDate}&end=2029-10-17`);

//   }
//   if (startDate && !endDate && statusFilter) {
//     startDate = moment(startDate).format("YYYY-MM-DD");
//     setSearchLaunches(`?start=${startDate}&end=2029-10-17&${statusFilter}`);

//   }
//   if (!startDate && !endDate && statusFilter) {
//     setSearchLaunches(`?${statusFilter}`)

//   }
//   if (searchLaunches && !startDate && !endDate && statusFilter) {
//     setSearchLaunches(`?${searchLaunches}&${statusFilter}`)
//   }
//   if (startDate && endDate && statusFilter) {
//     setSearchLaunches(
//       `?start=${startDate}&end=${endDate}&${statusFilter}`
//     );
//   }
// };

export const dataFilter = (timeline, startDate, endDate, statusFilter) => {
  let searchTerm = [];
  if (startDate) {
    startDate = moment(startDate).format("YYYY-MM-DD");
    searchTerm.push(`start=${startDate}`);
    if (!endDate) {
      searchTerm.push(`end=2029-10-17`);
    }
  }

  if (endDate) {
    endDate = moment(endDate).format("YYYY-MM-DD");
    searchTerm.push(`end=${endDate}`);
    if (!startDate) {
      searchTerm.push(`start=2002-10-17&`);
    }
  }

  if (statusFilter === "false") {
    // console.log(statusFilter, " false filter arrived.");
    searchTerm.push(`launch_success=false`);
  } else if (statusFilter === "true") {
    // console.log(statusFilter, "true value is arrive.");
    searchTerm.push(`launch_success=${statusFilter}`);
  }

  searchTerm = searchTerm.join("&");
  if (timeline === "all") {
    return `?${searchTerm}`;
  } else {
    console.log(timeline, "launches");
    return `${timeline}?${searchTerm}`;
  }
};

export const getParamsFromUrl = (params) => {
  let urlStatus;
  let urlStartDate;
  let urlEndDate;
  let mainTerm = params.substring(1);
  let arr = mainTerm.split("&");
  // console.log(arr, "main term");
  if (arr.length === 3) {
    urlStartDate = arr[0].split("=")[1];
    urlEndDate = arr[1].split("=")[1];
    urlStatus = getUrlStatus(arr[2]);
    return [urlStartDate, urlEndDate, urlStatus];
  } else if (arr.length === 2) {
    urlStartDate = arr[0].split("=")[1];
    urlEndDate = arr[1].split("=")[1];
    return [urlStartDate, urlEndDate];
  } else if (arr.length === 1) {
    urlStatus = getUrlStatus(arr[0]);
    return [urlStatus];
  } //else if (arr.length === 3) {
  //   urlStatus = getUrlStatus(arr[2]);
  //   return [urlStatus];
  // } else if (arr.length === 2) {
  //   return arr.join("&");
  // }
};

export const getUrlStatus = (statusString) => {
  let statusToBoolean;
  if (statusString.split("=")[1] === "false") {
    statusToBoolean = "false";
  } else if (statusString.split("=")[1] === "true") {
    statusToBoolean = "true";
  }
  return statusToBoolean;
};
