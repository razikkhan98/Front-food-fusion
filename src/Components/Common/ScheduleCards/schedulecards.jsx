import React from 'react'

const ScheduleCards = () => {
  return (
    <>
 <div className="relative bg-white shadow-md rounded-xl p-4 w-80">
      {/* Booking Details */}
      <div className="text-sm text-gray-800">
        <p>
          Name: <span className="font-semibold">Mr. Rahul Vijay</span>
        </p>
        <p>
          Booking ID: <span className="font-semibold">1234567</span>
        </p>
        <p>
          Date & Time: <span className="font-semibold">10-12-...</span>
        </p>
      </div>

      {/* Button (Placeholder) */}
      <button className="w-full bg-orange-100 text-orange-600 rounded-lg py-2 mt-3 text-sm font-medium">
        Generate
      </button>

      {/* Dine In Badge & Guests Count */}
      <div className="flex justify-between items-center mt-3">
        <span className="bg-green-100 text-green-600 px-3 py-1 text-xs rounded-full">
          Dine In
        </span>
        <div className="flex items-center gap-1 text-gray-700">
          <span className="font-semibold">4</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-4 h-4"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.5 5a5.5 5.5 0 1 1 11 0H2.5z" />
          </svg>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className="absolute top-3 right-3">
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-gray-200">
            ⋮
          </button>
          {/* Dropdown Items */}
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100">
              📞 Contact
            </button>
            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100">
              ✏️ Edit
            </button>
            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-100">
              🗑️ Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default ScheduleCards;