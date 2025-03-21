import React, { useEffect, useState } from "react";

// third Party Components
import { useForm } from "react-hook-form";
import SuccessModal from "../Modal/SuccessModal";
import CalenderInput from "../../Common/CalenderInput/CalenderInput.jsx";
import AlertNotifyPopup from "../AlertNotifyPopup/alertNotifyPopup.jsx";

// Images
import Tick from "../../Assets/Images/schedule-img/Success-icon.svg";
import CheckCircle from "../../Assets/icons/CheckCircle.svg";

const ScheduleForm = () => {
  // -----------
  // UseFrom
  // ----------
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // -----------
  // State
  // -----------
  const [orderTypeInptField, setOrderTypeInptField] = useState(" ");
  const [ModalOpen, setModalOpen] = useState(false);
  const [notifyPopup, setnotifyPopup] = useState(false);
  const [selectedDate, setselectedDate] = useState();

  const nameInptField = watch("name");
  const numberInptField = watch("number");
  const emailInptField = watch("email");
  const dateInptField = watch("date");
  const timeInptField = watch("time");
  const memberInputField = watch("member");
  const tableInputField1 = watch("groundfloor_tableNo");
  const tableInputField2 = watch("firstfloor_tableNo");
  const tableInputField3 = watch("secondfloor_tableNo");
  // ----------
  // Function
  // ----------
  const onSubmit = (data) => {
    const payload = {
      ...data,
      selectedDate,
    };
    console.log(payload, "Schedule");
    setnotifyPopup(true);
  };

  // Open Modal for user login function
  const openModal = () => {
    setModalOpen(true);
  };

  // Close Modal for user login function
  const closeModal = () => setModalOpen(false);

  // Close Notify Popup
  // const  = () => setModalOpen(false);

  // handle Date select input
  const handleDateSelect = (date) => {
    setselectedDate(date);
  };

  // =========
  // useeffect
  // =========

  useEffect(() => {
    setTimeout(() => {
      setnotifyPopup(false);
    }, 2000);
  }, [notifyPopup]);

  return (
    <>
      <p className="my-5 text-color-gray text-base font-medium">
        Personal Details
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 border-b pb-4">
          {/* Name */}
          <div>
            <label className="text-color-black font-medium text-sm">Name</label>
            <input
              type="text"
              placeholder="Customer's name here"
              className={`w-full mt-1 px-2 py-3 border-gray-color text-base font-medium rounded-lg ${nameInptField
                ? ""
                : "bg-light-color text-sm font-normal border-light-color py-3.5"
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
              className={`w-full mt-1 px-2 py-3 border-gray-color text-base font-medium rounded-lg ${numberInptField
                ? ""
                : "bg-light-color text-sm font-normal border-light-color py-3.5"
                } focus-visible:bg-white`}
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
              E-mail <span className="text-color-gray">(Optional)</span>
            </label>
            <input
              type="email"
              placeholder="Customer's E-mail ID here"
              className={`w-full mt-1 px-2 py-3 border-gray-color text-base font-medium rounded-lg ${emailInptField
                ? ""
                : "bg-light-color text-sm font-normal border-light-color py-3.5"
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

        <p className="my-5 text-color-gray text-base font-medium">
          Date & Time
        </p>
        <div className="flex border-b pb-5">
          {/* <div>
            <input
              type="date"
              placeholder="select date"
              className={`w-full mt-1 px-2 py-3 border-gray-color text-base font-medium rounded-lg ${
                dateInptField
                  ? ""
                  : "bg-light-color text-sm font-normal border-light-color py-3.5"
              } focus-visible:bg-white`}
              {...register("date")}
            />
          </div> */}
          <div>
            <CalenderInput handleSelectedDate={handleDateSelect} />
          </div>

          <div>
            <input
              type="time"
              // placeholder=""
              className={`w-40 ms-8 mt-1 px-2 py-3 border-gray-color text-base font-medium rounded-lg ${timeInptField
                ? ""
                : "bg-light-color text-sm font-normal border-light-color py-3.5"
                } focus-visible:bg-white`}
              {...register("time")}
            />
          </div>
        </div>

        <div>
          <p className="my-5 text-color-gray text-base font-medium">
            Booking Type
          </p>

          <div className="flex space-x-4  border-b pb-5">
            {["Dine In", "Delivery", "Pickup"].map((option, index) => (
              <label
                key={index}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="orderType"
                  className="hidden peer"
                  onChange={() => setOrderTypeInptField(option)}
                />
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
            <p className="my-5 text-color-gray text-base font-medium">
              Table Details
            </p>
            <label className="text-color-black font-medium text-sm block mt-3">
              No of Members
            </label>
            <select
              className={`w-1/7 custom-select mt-1 px-4 py-3 border-gray-color text-base font-medium rounded-lg ${memberInputField
                ? ""
                : "bg-light-color text-sm font-normal text-light-gray-color border-light-color py-3.5"
                } focus-visible:bg-white`}
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

            <div className="flex mt-2">
              <div className="me-3">
                <label className="text-color-black font-medium text-sm block mt-3">
                  Ground Floor
                </label>
                <select
                  className={`w-40 custom-select mt-1 px-4 py-3 border-gray-color text-base font-medium rounded-lg ${tableInputField1
                    ? ""
                    : "bg-light-color text-sm font-normal text-light-gray-color border-light-color py-3.5"
                    } focus-visible:bg-white`}
                  {...register("groundfloor_tableNo")}
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

              <div className="mx-3">
                <label className="text-color-black font-medium text-sm block mt-3">
                  First Floor
                </label>
                <select
                  className={`w-40 custom-select mt-1 px-4 py-3 border-gray-color text-base font-medium rounded-lg ${tableInputField2
                    ? ""
                    : "bg-light-color text-sm text-light-gray-color font-normal border-light-color py-3.5"
                    } focus-visible:bg-white`}
                  {...register("firstfloor_tableNo")}
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

              <div className="ms-3">
                <label className="text-color-black font-medium text-sm block mt-3">
                  Second Floor
                </label>
                <select
                  className={`w-40 custom-select mt-1 px-4 py-3 border-gray-color text-base font-medium rounded-lg ${tableInputField3
                    ? ""
                    : "bg-light-color text-sm font-normal text-light-gray-color border-light-color py-3.5"
                    } focus-visible:bg-white`}
                  {...register("secondfloor_tableNo")}
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
              <p className="my-3 text-color-gray text-base font-medium">
                Delivery Address
              </p>

              <div className="flex space-x-4">
                {["New Address", "Saved Address"].map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="address"
                      className="hidden peer"
                    />
                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[--green-color] peer-checked:bg-[--green-color]">
                      <div className="w-4 h-4 rounded-full border-2 border-gray-50 peer-checked:bg-[--green-color]"></div>
                    </div>
                    <span className="text-color-black text-base font-normal">{option}</span>
                  </label>
                ))}
              </div>
              {/* 
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4 py-5">
                <div className="inline">
                  <label className="text-color-black font-medium text-sm">
                    House/flat no.
                  </label>
                  <input
                    type="text"
                    // placeholder="House/flat no"
                    className={` mt-1 p-2 border rounded-lg focus-visible:bg-white`}
                  />
                </div>
                <div className="inline">
                  <label className="text-color-black font-medium text-sm">
                    Appartment/Road/Area
                  </label>
                  <input
                    type="text"
                    // placeholder="Appartment"
                    className={` mt-1 p-2 border rounded-lg focus-visible:bg-white`}
                  />
                </div>
                <div className="inline">
                  <label className="text-color-black font-medium text-sm">
                    Pincode
                  </label>
                  <input
                    type="text"
                    // placeholder="pincode"
                    className={`mt-1 p-2 border rounded-lg focus-visible:bg-white`}
                  />
                </div>
                <div className="inline">
                  <label className="text-color-black font-medium text-sm">
                    City
                  </label>
                  <input
                    type="text"
                    // placeholder='city'
                    className={`mt-1 p-2 border rounded-lg focus-visible:bg-white`}
                  />
                </div>
                <div className="inline">
                  <label className="text-color-black font-medium text-sm">
                    State
                  </label>
                  <input
                    type="text"
                    // placeholder='State'
                    className={`mt-1 p-2 border rounded-lg focus-visible:bg-white`}
                  />
                </div>
              </div> */}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 py-5">
                <div className="flex flex-col">
                  <label className="text-color-black font-medium text-sm">
                    House/Flat No.
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 border rounded-lg focus-visible:bg-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-color-black font-medium text-sm">
                    Apartment/Road/Area
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 border rounded-lg focus-visible:bg-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-color-black font-medium text-sm">Pincode</label>
                  <input
                    type="text"
                    className="mt-1 p-2 border rounded-lg focus-visible:bg-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-color-black font-medium text-sm">City</label>
                  <input
                    type="text"
                    className="mt-1 p-2 border rounded-lg focus-visible:bg-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-color-black font-medium text-sm">State</label>
                  <input
                    type="text"
                    className="mt-1 p-2 border rounded-lg focus-visible:bg-white"
                  />
                </div>
              </div>


              <div className="border-t">
                <p className="my-3 text-color-gray text-base font-medium">
                  Payment
                </p>

                <div className="flex space-x-4">
                  {["Cash", "UPI", "Card"].map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="payment1"
                        className="hidden peer"
                      />
                      <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[--green-color] peer-checked:bg-[--green-color]">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-50 peer-checked:bg-[--green-color]"></div>
                      </div>
                      <span className="text-color-black text-base font-normal">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : orderTypeInptField === "Pickup" ? (
          <>
            <div>
              <p className="my-5 text-color-gray text-base font-medium">
                Payment
              </p>

              <div className="flex space-x-4">
                {["Cash", "UPI", "Card"].map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="payment2"
                      className="hidden peer"
                    />
                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[--green-color] peer-checked:bg-[--green-color]">
                      <div className="w-4 h-4 rounded-full border-2 border-gray-50 peer-checked:bg-[--green-color]"></div>
                    </div>
                    <span className="text-color-black text-base font-normal">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        <div>
          {/* {orderTypeInptField === "Dine In" || "Delivery" || "Pickup"  ? (
            
            <button className='px-8 py-2 bg-gray-200 text-gray-600 rounded-full mt-7'>Add Item</button>

        ) : (
            <> </>
        )} */}
          <button
            // onClick={() => openModal()}
            className="px-8 py-2 bg-gray-200 text-gray-600 rounded-full mt-7"
          >
            Schedule Button
          </button>
        </div>
      </form>

      <SuccessModal
        isOpen={ModalOpen}
        closeModal={closeModal}
        image={Tick}
        title={"Order Scheduled Successfully!!"}
        description={"Lorem ipsum dolor sit amet consectetur"}
        buttonTexts={["Schedule New Order", "Go to Homepage"]}
      />
      <AlertNotifyPopup
        isOpen={notifyPopup}
        text={"Number copied to clipboard"}
        icon={CheckCircle}
      // closeModal={closeModal}
      />
    </>
  );
};

export default ScheduleForm;
