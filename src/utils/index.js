import moment from "moment";

export const dataFilter = (
  startDate,
  endDate,
  searchLaunches,
  setSearchLaunches,
  statusFilter
) => {
  console.log(searchLaunches, startDate, endDate, 'hello');
  if (searchLaunches && !(startDate || endDate)) {
    setSearchLaunches(searchLaunches);

  } 
  if (searchLaunches && startDate && !endDate && !statusFilter) {
      console.log(searchLaunches, startDate, "start-date");
      startDate = moment(startDate).format("YYYY-MM-DD");
      setSearchLaunches(`${searchLaunches}?start=${startDate}&end=2029-10-17`);

  }
  if (searchLaunches && !startDate && endDate && !statusFilter) {
    console.log(endDate, "end-date");
    endDate = moment(endDate).format("YYYY-MM-DD");
    setSearchLaunches(`${searchLaunches}?start=2029-10-17&end=${endDate}`);

  }
  if (startDate && endDate && !statusFilter) {
    startDate = moment(startDate).format("YYYY-MM-DD");
    endDate = moment(endDate).format("YYYY-MM-DD");
    setSearchLaunches(`?start=${startDate}&end=${endDate}`);
    
  }
  if (!startDate && endDate) {
    endDate = moment(endDate).format('YYYY-MM-DD')
    setSearchLaunches(`?start=2029-10-17&end=${endDate}`)
  }
  if (searchLaunches && startDate && endDate && statusFilter) {
    startDate = moment(startDate).format("YYYY-MM-DD");
    endDate = moment(endDate).format("YYYY-MM-DD");
    setSearchLaunches(`${searchLaunches}?start=${startDate}&end=${endDate}&${statusFilter}`);
    
  }
  if (startDate && !endDate && !statusFilter) {
    startDate = moment(startDate).format("YYYY-MM-DD");
    setSearchLaunches(`?start=${startDate}&end=2029-10-17`);

  }
  if (startDate && !endDate && statusFilter) {
    startDate = moment(startDate).format("YYYY-MM-DD");
    setSearchLaunches(`?start=${startDate}&end=2029-10-17&${statusFilter}`);

  }
  if (!startDate && !endDate && statusFilter) {
    setSearchLaunches(`?${statusFilter}`)

  }
  if (searchLaunches && !startDate && !endDate && statusFilter) {
    searchLaunches(`?${searchLaunches}&${statusFilter}`)
  }
  if (startDate && endDate && statusFilter) {
    setSearchLaunches(
      `?start=${startDate}&end=${endDate}&${statusFilter}`
    );
  }
};
