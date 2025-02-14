import React, { useState } from 'react'
import LeftSideNavbar from '../../Common/SideNavbar/leftSideNavbar';
import ChatBot from '../../Common/ChatBot/chatbot';
import RightSidebar from '../../Common/SideNavbar/rightSideNavbar';
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import Navbar from '../../Common/Navbar/navbar';

// Import React-Icons
// import { FaCalendarAlt } from "react-icons/fa";

// third Party Components
import { useForm } from 'react-hook-form';


// Import Images
import bell from "../../Assets/Images/navbar-img/bell.svg";
import magnify from "../../Assets/Images/navbar-img/MagnifyingGlass.svg";
// import Calendar from "../../Assets/icons/calendar-tick.svg";

// Json
const ScheduleButtons = [
    { btn_name: "New Order", btn_color: "bg-orange-100" },
    { btn_name: "Ongoing", btn_color: "bg-transparent" },
    { btn_name: "Completed", btn_color: "bg-transparent" },
];
const ScheduleIcons = [
    { nav_img: magnify },
    { nav_img: bell },
];
const ScheduleHeading = [
    "Schedule Order"
];
const Schedule = () => {
    // -----------
    // UseFrom
    // ----------
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    // -----------
    // State
    // ------------
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
    const [orderTypeInptField, setOrderTypeInptField] = useState(" ");
    // ------------
    // Function
    // ------------
    const toggleRightSidebar = () => {
        setIsRightSidebarOpen(!isRightSidebarOpen);
    };


    const nameInptField = watch("name");
    const numberInptField = watch("number");
    const emailInptField = watch("email");
    const dateInptField = watch("date");
    const timeInptField = watch("time");
    const memberInputField = watch("member");
    const tableInputField = watch("tableNo");
    const onSubmit = (data) => {
        console.log(data, "Schedule")
    }
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Left Sidebar */}
                <LeftSideNavbar />
                <ChatBot />

                {/* Main Content Area */}
                <div className={`flex-grow p-4 transition-all duration-300`}>
                    <Navbar buttons={ScheduleButtons} icons={ScheduleIcons} pageHeading={ScheduleHeading} />

                    <p className='my-5 text-color-gray text-base font-medium'>Personal Details</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 border-b pb-4">
                            {/* Name */}
                            <div>
                                <label className="text-color-black font-medium text-sm">Name</label>
                                <input
                                    type="text"
                                    placeholder="Customer's name here"
                                    className={`w-full mt-1 p-2 rounded-lg border ${nameInptField ? "" : "bg-light-color"
                                        } focus-visible:bg-white`}
                                    {...register("name")}
                                />
                                {errors?.customer_name && (
                                    <span className="text-red-600">
                                        {errors?.customer_name?.message}
                                    </span>
                                )}

                            </div>
                            {/* Contact No */}
                            <div>
                                <label className="text-color-black font-medium text-sm">
                                    Contact No
                                </label>
                                <input
                                    type="text"
                                    placeholder="Customer's contact no here"
                                    className={`w-full mt-1 p-2 rounded-lg border ${numberInptField ? "" : "bg-light-color"} focus-visible:bg-white`}
                                    {...register("number")}
                                />
                                {errors.customer_mobile_no && (
                                    <p className="text-red-500 text-xs">
                                        {errors.customer_mobile_no.message}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-color-black font-medium text-sm">
                                    E-mail (Optional)
                                </label>
                                <input
                                    type="email"
                                    placeholder="Customer's E-mail ID here"
                                    className={`w-full mt-1 p-2 border rounded-lg ${emailInptField ? "" : "bg-light-color"
                                        } focus-visible:bg-white`}
                                    {...register("email")}
                                />
                                {errors.customer_email && (
                                    <p className="text-red-500 text-xs">
                                        {errors.customer_email.message}
                                    </p>
                                )}
                            </div>

                        </div>

                        <p className='my-5 text-color-gray text-base font-medium'>Date & Time</p>
                        <div className='grid grid-cols-7  grid-rows-1 gap-6 border-b pb-5'>
                            <div>
                                <input
                                    type="date"
                                    placeholder="select date"
                                    className={`w-full mt-1 p-2 rounded-lg border ${dateInptField ? "" : "bg-light-color"
                                        } focus-visible:bg-white`}
                                    {...register("date")}
                                />

                            </div>

                            <div>
                                <input
                                    type="time"
                                    // placeholder=""
                                    className={`w-full mt-1 p-2 rounded-lg border ${timeInptField ? "" : "bg-light-color"} focus-visible:bg-white`}
                                    {...register("time")}

                                />

                            </div>
                        </div>

                        <div>
                            <p className='my-5 text-color-gray text-base font-medium'>Booking Type</p>

                            <div className="flex space-x-4  border-b pb-5">
                                {["Dine In", "Delivery", "Pickup"].map((option, index) => (
                                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                        <input type="radio" name="orderType" className="hidden peer" onChange={() => setOrderTypeInptField(option)} />
                                        <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[--green-color] peer-checked:bg-[--green-color]">
                                            <div className="w-4 h-4 rounded-full border-2 border-gray-50 peer-checked:bg-[--green-color]"></div>
                                        </div>
                                        <span className="text-gray-700">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>


                        {/* Table No if Dine In */}
                        {orderTypeInptField === "Dine In" || orderTypeInptField === "" ? (
                            <div>
                                <label className="text-color-black font-medium text-sm block mt-3">
                                    No of Members
                                </label>
                                <select
                                    className={`w-1/7 mt-1 p-3 border rounded-lg ${memberInputField ? "" : "bg-light-color"} focus-visible:bg-white`}
                                    {...register("member")}
                                >
                                    <option value={""}>No. of Members</option>
                                    <option value={"1"}>1</option>
                                    <option value={"2"}>2</option>
                                    <option value={"3"}>3</option>
                                    <option value={"4"}>4</option>
                                    <option value={"5"}>5</option>
                                    <option value={"6"}>6</option>
                                    <option value={"7"}>7</option>
                                    <option value={"8"}>8</option>
                                </select>

                                <div className='grid grid-cols-8 gap-2 mt-2'>

                                    <div>
                                        <label className="text-color-black font-medium text-sm block mt-3">
                                            Ground Floor
                                        </label>
                                        <select
                                            className={`w-40 mt-1 p-3 border rounded-lg ${tableInputField ? "" : "bg-light-color"} focus-visible:bg-white`}
                                            {...register("tableNo")}
                                        >
                                            <option value={""}>Select table</option>
                                            <option value={"1"}>1</option>
                                            <option value={"2"}>2</option>
                                            <option value={"3"}>3</option>
                                            <option value={"4"}>4</option>
                                            <option value={"5"}>5</option>
                                            <option value={"6"}>6</option>
                                            <option value={"7"}>7</option>
                                            <option value={"8"}>8</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-color-black font-medium text-sm block mt-3">
                                            First Floor
                                        </label>
                                        <select
                                            className={`w-40 mt-1 p-3 border rounded-lg ${tableInputField ? "" : "bg-light-color"} focus-visible:bg-white`}
                                            {...register("table")}
                                        >
                                            <option value={""}>Select table</option>
                                            <option value={"1"}>1</option>
                                            <option value={"2"}>2</option>
                                            <option value={"3"}>3</option>
                                            <option value={"4"}>4</option>
                                            <option value={"5"}>5</option>
                                            <option value={"6"}>6</option>
                                            <option value={"7"}>7</option>
                                            <option value={"8"}>8</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-color-black font-medium text-sm block mt-3">
                                            Second Floor
                                        </label>
                                        <select
                                            className={`w-40 mt-1 p-3 border rounded-lg ${tableInputField ? "" : "bg-light-color"} focus-visible:bg-white`}
                                            {...register("table")}
                                        >
                                            <option value={""}>Select table</option>
                                            <option value={"1"}>1</option>
                                            <option value={"2"}>2</option>
                                            <option value={"3"}>3</option>
                                            <option value={"4"}>4</option>
                                            <option value={"5"}>5</option>
                                            <option value={"6"}>6</option>
                                            <option value={"7"}>7</option>
                                            <option value={"8"}>8</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ) : orderTypeInptField === "Delivery" ? (
                            <>
                                {/* delivery address if delivery */}
                                <div>
                                    <p className='my-3 text-color-gray text-base font-medium'>Delivery Address</p>

                                    <div className="flex space-x-4">
                                        {["New Address", "Saved Address"].map((option, index) => (
                                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                                <input type="radio" name="orderType" className="hidden peer" />
                                                <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[--green-color] peer-checked:bg-[--green-color]">
                                                    <div className="w-4 h-4 rounded-full border-2 border-gray-50 peer-checked:bg-[--green-color]"></div>
                                                </div>
                                                <span className="text-gray-700">{option}</span>
                                            </label>
                                        ))}
                                    </div>

                                    <div className='grid grid-cols-6 py-5'>
                                        <div>
                                            <label className="text-color-black font-medium text-sm">
                                                House/flat no.
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="House/flat no"
                                                className={` mt-1 p-2 border rounded-lg focus-visible:bg-white`}
                                            />

                                        </div>
                                        <div>
                                            <label className="text-color-black font-medium text-sm">
                                                Appartment/Road/Area
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Appartment"
                                                className={` mt-1 p-2 border rounded-lg focus-visible:bg-white`}
                                            />

                                        </div>
                                        <div>
                                            <label className="text-color-black font-medium text-sm">
                                                Pincode
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="pincode"
                                                className={`mt-1 p-2 border rounded-lg focus-visible:bg-white`}
                                            />

                                        </div>
                                        <div>
                                            <label className="text-color-black font-medium text-sm">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                placeholder='city'
                                                className={`mt-1 p-2 border rounded-lg focus-visible:bg-white`}
                                            />

                                        </div>
                                        <div>
                                            <label className="text-color-black font-medium text-sm">
                                                State
                                            </label>
                                            <input
                                                type="text"
                                                placeholder='State'
                                                className={`mt-1 p-2 border rounded-lg focus-visible:bg-white`}
                                            />

                                        </div>
                                    </div>


                                    <div className='border-t'>
                                        <p className='my-3 text-color-gray text-base font-medium'>Payment</p>

                                        <div className="flex space-x-4">
                                            {["Cash", "UPI", "Card"].map((option, index) => (
                                                <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                                    <input type="radio" name="orderType" className="hidden peer" />
                                                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[--green-color] peer-checked:bg-[--green-color]">
                                                        <div className="w-4 h-4 rounded-full border-2 border-gray-50 peer-checked:bg-[--green-color]"></div>
                                                    </div>
                                                    <span className="text-gray-700">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : orderTypeInptField === "Pickup" ? (
                            <>

                                <div>
                                    <p className='my-5 text-color-gray text-base font-medium'>Payment</p>

                                    <div className="flex space-x-4">
                                        {["Cash", "UPI", "Card"].map((option, index) => (
                                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                                <input type="radio" name="orderType" className="hidden peer" />
                                                <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[--green-color] peer-checked:bg-[--green-color]">
                                                    <div className="w-4 h-4 rounded-full border-2 border-gray-50 peer-checked:bg-[--green-color]"></div>
                                                </div>
                                                <span className="text-gray-700">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )

                            : (
                                <></>
                            )}

                        <div>

                            {orderTypeInptField === "Dine In" || "Delivery" || "Pickup" & orderTypeInptField === " " ? (
                                <button className='px-8 py-2 bg-gray-200 text-gray-600 rounded-full mt-7'>Schedule Button</button>

                            ) : (
                                <button className='px-8 py-2 bg-gray-200 text-gray-600 rounded-full mt-7'>Add Item</button>

                            )
                            }
                        </div>
                    </form>
                </div>


                {/* Right Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out relative rounded-l-3xl ${
          isRightSidebarOpen ? "w-[360px]" : "w-7"
        }`}
      >
        <span
          className="bg-[--purple-color] w-11 h-11 flex justify-center items-center hover:bg-[--purple-color] cursor-pointer font-bold p-1 rounded-full absolute top-1/2 -left-5"
          onClick={toggleRightSidebar}
        >
          {/* <img src={Toggle} alt="Loading" /> */}
          {isRightSidebarOpen ? (
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl text-white font-semibold" />
          ) : (
            <MdOutlineKeyboardDoubleArrowLeft className="text-3xl text-white font-semibold" />
          )}
        </span>

        <RightSidebar />
      </div>
            </div>

        </>
    )
}

export default Schedule;