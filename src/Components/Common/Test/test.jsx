import React, { useState, useEffect, useRef } from "react";
import calender from "../../Assets/icons/calendar.svg";

// Json
const datePickerMonthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const datePickerDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DatePicker = ({ handleSelectedDate }) => {
  // ========
  // states
  // ========
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [datePickerValue, setDatePickerValue] = useState("00/00/00");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [datePickerDaysInMonth, setDatePickerDaysInMonth] = useState([]);
  const [datePickerBlankDaysInMonth, setDatePickerBlankDaysInMonth] = useState(
    []
  );
  const [datePickerDay, setDatePickerDay] = useState(currentDate.getDate());

  const inputRef = useRef(null);

  // ===========
  //   Functions
  // ===========

  const datePickerFormatDate = (date) => {
    const formattedDate = ("0" + date.getDate()).slice(-2);
    const formattedMonth = datePickerMonthNames[date.getMonth()].substring(
      0,
      3
    );
    const formattedYear = date.getFullYear();
    return `${formattedMonth} ${formattedDate}, ${formattedYear}`;
  };

  const datePickerCalculateDays = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    const blankDaysArray = Array.from(
      { length: firstDayOfWeek },
      (_, i) => i + 1
    );
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return { blankDaysArray, daysArray };
  };

  const datePickerDayClicked = (day) => {
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setDatePickerDay(day);
    setDatePickerValue(datePickerFormatDate(selectedDate));
    setDatePickerOpen(false);
  };

  const changeMonth = (increment) => {
    const newMonth = currentDate.getMonth() + increment;
    const newYear =
      newMonth < 0
        ? currentDate.getFullYear() - 1
        : newMonth > 11
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();

    setCurrentDate(new Date(newYear, (newMonth + 12) % 12, 1)); // Reset day to 1 to recalculate correct days
  };

  // ===========
  //   useeffect
  // ===========

  useEffect(() => {
    const { blankDaysArray, daysArray } = datePickerCalculateDays(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );
    setDatePickerBlankDaysInMonth(blankDaysArray);
    setDatePickerDaysInMonth(daysArray);
    // setDatePickerValue(datePickerFormatDate(currentDate));
  }, [currentDate]);

  useEffect(() => {
    handleSelectedDate(datePickerValue);
  }, [datePickerValue]);

  return (
    <div className="">
      <div className="relative w-40">
        <input
          ref={inputRef}
          type="text"
          onClick={() => setDatePickerOpen(!datePickerOpen)}
          value={
            datePickerValue !== "00/00/00"
              ? new Date(datePickerValue)?.toLocaleDateString("en-GB")
              : datePickerValue
          }
          className={`w-full mt-1 px-2 py-3 border-gray-color text-base font-medium rounded-lg ${
            datePickerValue !== "00/00/00"
              ? ""
              :
            "bg-light-color text-sm font-medium border-light-color py-3.5"
          } focus-visible:bg-white`}
          placeholder="Select date"
          readOnly
        />
        <div
          onClick={() => setDatePickerOpen(!datePickerOpen)}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <img src={calender} alt="" />
        </div>
        {datePickerOpen && (
          <div className="absolute top-0 left-0 max-w-lg p-4 mt-12 bg-white rounded-xl shadow-md card-box-shadow calender-modal">
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="text-sm font-medium">
                  {datePickerMonthNames[currentDate.getMonth()]}
                </span>
                <span className="ml-2 text-2xl font-medium">
                  {currentDate.getFullYear()}
                </span>
              </div>
              <div>
                <button
                  onClick={() => changeMonth(-1)}
                  type="button"
                  className="p-1 transition duration-100 ease-in-out rounded-full hover:bg-gray-100"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => changeMonth(1)}
                  type="button"
                  className="p-1 transition duration-100 ease-in-out rounded-full hover:bg-gray-100"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 mb-3">
              {datePickerDays.map((day, index) => (
                <div key={index} className="px-0.5">
                  <div className="text-xs font-medium text-center text-gray-800">
                    {day}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {datePickerBlankDaysInMonth.map((_, index) => (
                <div
                  key={index}
                  className="p-1 text-sm text-center border border-transparent"
                ></div>
              ))}
              {datePickerDaysInMonth.map((day, dayIndex) => (
                <div key={dayIndex} className="px-0.5 mb-1 aspect-square">
                  <div
                    onClick={() => datePickerDayClicked(day)}
                    className={`flex items-center justify-center text-sm font-medium leading-none text-center cursor-pointer h-7 w-7 
                                            ${
                                              datePickerDay === day
                                                ? "bg-neutral-800 text-white"
                                                : "hover:bg-neutral-200"
                                            } ${
                      datePickerDay === day
                        ? "bg-neutral-800 text-white"
                        : "text-gray-600"
                    }
                                        `}
                  >
                    {day}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePicker;
