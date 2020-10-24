import moment from "moment";

export const dataFilter = (
  startDate,
  endDate,
  searchLaunches,
  setSearchLaunches,
) => {
  console.log(searchLaunches, startDate, endDate, 'hello');
  if (searchLaunches && !(startDate || endDate)) {
    setSearchLaunches(searchLaunches);

  } else if (searchLaunches && startDate && !endDate) {
      console.log(searchLaunches, startDate, "start-date");
      startDate = moment(startDate).format("YYYY-MM-DD");
      setSearchLaunches(`${searchLaunches}?start=${startDate}&end=2029-10-17`);

  } else if (searchLaunches && !startDate && endDate) {
    console.log(endDate, "end-date");
    endDate = moment(endDate).format("YYYY-MM-DD");
    setSearchLaunches(`${searchLaunches}?start=2029-10-17&end=${endDate}`);

  } else if (startDate && endDate) {
    startDate = moment(startDate).format("YYYY-MM-DD");
    endDate = moment(endDate).format("YYYY-MM-DD");
    setSearchLaunches(`?start=${startDate}&end=${endDate}`);
    
  } else if (searchLaunches && startDate && endDate) {
    startDate = moment(startDate).format("YYYY-MM-DD");
    endDate = moment(endDate).format("YYYY-MM-DD");
    setSearchLaunches(`${searchLaunches}?start=${startDate}&end=${endDate}`);
  }
};
