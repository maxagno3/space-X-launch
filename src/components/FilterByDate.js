import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FilterByDate() {
  return (
    <>
      <div className="flex flex-row mb-1 sm:mb-0">
        <div className="relative mr-3">
          <p>Start Date</p>
          <ReactDatePicker
            selectsStart
            isClearable
            dateFormat="yyyy/MM/dd"
            showYearDropDown
            showMonthDropDown
            closeOnScroll={true}
            className="cursor-pointer bg-teal-200 text-black p-2"
          />
        </div>
        <div className="relative">
          <p>End Date</p>
          <ReactDatePicker
            selectsEnd
            isClearable
            minDate={new Date()}
            dateFormat="yyyy/MM/dd"
            showYearDropDown
            showMonthDropDown
            closeOnScroll={true}
            className="cursor-pointer bg-teal-200 text-black p-2"
          />
          <button className="ml-10 text-white p-2 bg-red-300">
            Filter Dates
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterByDate;
