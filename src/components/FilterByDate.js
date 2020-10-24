import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FilterByDate({ startDate, endDate, setStartDate, setEndDate }) {
  return (
    <>
      <div className="flex flex-row mb-1 sm:mb-0">
        <div className="relative mr-3">
          <p>Start Date</p>
          <ReactDatePicker
            selectsStart
            selected={startDate}
            isClearable
            dateFormat="yyyy/MM/dd"
            showYearDropDown
            showMonthDropDown
            closeOnScroll={true}
            onChange={(data) => setStartDate(data)}
            className="cursor-pointer bg-white text-black p-2"
            placeholderText="Start Date"
          />
        </div>
        <div className="relative">
          <p>End Date</p>
          <ReactDatePicker
            selectsEnd
            selected={endDate}
            isClearable
            minDate={new Date()}
            dateFormat="yyyy/MM/dd"
            showYearDropDown
            showMonthDropDown
            closeOnScroll={true}
            onChange={(data) => setEndDate(data)}
            className="cursor-pointer bg-white text-black p-2"
            placeholderText="End Date"
          />
          {/* <button className="ml-10 text-white p-2 bg-red-300">
            Filter Dates
          </button> */}
        </div>
      </div>
    </>
  );
}

export default FilterByDate;
