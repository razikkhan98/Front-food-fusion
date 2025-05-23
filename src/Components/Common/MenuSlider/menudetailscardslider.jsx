import React, { useState, useCallback, useEffect, useContext } from "react";

import { PiChefHatFill, PiPizzaLight } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import sparkleStar from "../../Assets/Images/menuPageImages/svgs/Sparkle.svg";
import { FaStar } from "react-icons/fa6";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
// import img
import Food1 from "../../Assets/Images/menuCard-img/food-1.jpeg";
import { UseContext } from "../../Context/context";
import { connect, useDispatch } from "react-redux";
import { AddMenuRedux } from "../../Redux/Slice/Menu/MenuSlice";
import IncrementDecrementFunctionality from "../IncrementDecrementFunctionality/incrementDecrementFunctionality";

function MenuDetailsCardSlider({
  toggleMenuDetailModal,
  SliderDataJson,
  selectedCard,
  MenuFromRedux,
}) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const SliderHeight = window?.screen?.height / 2;
  const { CustomerDetailsCnxt } = useContext(UseContext);
  const dispatch = useDispatch();

  // Filter Previous order with customerId
  const FilterPrevOrdCustmId = MenuFromRedux?.Menu?.filter(
    (i) => i?.customerID == CustomerDetailsCnxt?._id
  );

  // Function to handle Add FOOD Item
  const HandleItemAdd = (item) => {
    const payload = {
      customerID: CustomerDetailsCnxt?._id,
      menuID: 0,
      floorName: CustomerDetailsCnxt?.floorName,
      tableNumber: CustomerDetailsCnxt?.tableNumber,
      orderID: item?.id,
      categoriesName: "",
      subcategoriesName: item?.name,
      subcategoriesAmount: item?.price,
      subcategoriesType: "",
      quantity: 1,
      totalAmount: 0,
      totalitemTax: 0,
      discount: "",
      addonNotes: "",
      addonName: "",
      addonAmount: 0,
      addonQuantity: 0,
    };
    dispatch(AddMenuRedux(payload));
  };

  const handlePrev = useCallback(() => {
    setDirection("prev");
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? SliderDataJson?.length - 1 : prevIndex - 1
    );
  }, [SliderDataJson]);

  const handleNext = useCallback(() => {
    setDirection("next");
    setCurrentCardIndex((prevIndex) =>
      prevIndex === SliderDataJson?.length - 1 ? 0 : prevIndex + 1
    );
  }, [SliderDataJson]);

  const getCardPosition = (index) => {
    const totalCards = SliderDataJson?.length || 0;
    const relativeIndex = (index - currentCardIndex + totalCards) % totalCards;

    if (relativeIndex === 0) return "center";
    if (relativeIndex === 1) return "right";
    if (relativeIndex === totalCards - 1) return "left";
    return "hidden";
  };

  // starts rating functionality
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <TiStarFullOutline
            key={i}
            className="text-[--yellow-color]"
            fontSize={19}
          />
        );
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <TiStarHalfOutline
            key={i}
            className="text-[--yellow-color]"
            fontSize={19}
          />
        );
      } else {
        stars.push(
          <TiStarOutline
            key={i}
            className="text-[--yellow-color]"
            fontSize={19}
          />
        );
      }
    }
    return stars;
  };

  const getCardClasses = (position) => {
    const baseClasses =
      "absolute transition-all duration-500 ease-in-out transform";

    switch (position) {
      case "center":
        return `${baseClasses} scale-125 z-20 menu-slider-center-card opacity-100 top-0 left-1/2 -translate-x-1/2`;
      case "left":
        return `${baseClasses}  z-10 menu-slider-side-card top-0 left-0 -translate-x-1/2`;
      case "right":
        return `${baseClasses}  z-10 menu-slider-side-card top-0 right-0 translate-x-1/2`;
      default:
        return `${baseClasses} opacity-0`;
    }
  };

  // useEffect to set the initial index based on selectedCard
  useEffect(() => {
    if (selectedCard) {
      const index = SliderDataJson.findIndex((item) => item === selectedCard);
      if (index !== -1) {
        setCurrentCardIndex(index);
      }
    }
  }, [selectedCard, SliderDataJson]);

  return (
    <div className="relative flex justify-center items-center h-screen w-full overflow-hidden">
      <div
        className={`relative w-full sm:max-w-lg md:max-w-lg lg:max-w-2xl xl:max-w-3xl`}
        style={{ height: `${SliderHeight}px` }}
      >
        {SliderDataJson?.map((card, index) => {
          const position = getCardPosition(index);

          return (
            <div
              key={card.name + index} // Use a unique key
              className={getCardClasses(position)}
            >
              <div
                className={`max-w-sm bg-white w-full h-full rounded-3xl shadow-lg overflow-hidden 
                  `}
              >
                {/* Card Content (Same as previous implementation) */}
                <div
                  className={`relative ${
                    card?.status !== "Available" ? "filter grayscale" : ""
                  }`}
                >
                  <img
                    className={`w-full ${
                      position == "center" ? "menudetailSliderimg" : "h-40"
                    } object-cover border-4 border-white rounded-t-3xl`}
                    src={card?.img || Food1}
                    alt="Veg Pizza"
                  />
                  {position === "center" && (
                    <span
                      onClick={toggleMenuDetailModal}
                      className="absolute top-3 right-3 bg-white bg-opacity-25 px-2 py-2 rounded-full cursor-pointer"
                    >
                      <IoMdClose className="text-white" />
                    </span>
                  )}
                </div>

                {/* Card content */}
                <div
                  className={`p-4 pt-1 ${
                    position == "center" ? "h-64 grid items-center" : ""
                  }`}
                >
                  {/* Title & Ratings */}
                  <div className="flex justify-between">
                    <h2
                      className={`text-base font-medium truncate ${
                        card?.status !== "Available"
                          ? "filter grayscale text-color-gray"
                          : ""
                      }`}
                    >
                      {card?.name}
                    </h2>
                    <span
                      className={`text-end flex text-xs items-center px-1 ${card?.status == "Available" ?"text-light-green bg-light-green":"text-color-red bg-color-red"}`}
                    >
                      <span
                        className={`${
                          card?.status == "Available"
                            ? "bg-green-500"
                            : "bg-red-500 "
                        } inline-block h-1 me-1 p-0.5  rounded-full`}
                      ></span>
                      {card?.status}
                    </span>
                  </div>
                  <div
                    className={`flex items-center  mt-1 text-light-gray-color ${
                      card?.status !== "Available" ? "filter grayscale" : ""
                    }`}
                  >
                    {/* Star Icon */}
                    <span className="flex me-1.5">{renderStars(2.5)}</span>
                    <span className="mr-1 text-xs font-normal">4.5</span>
                    <span className="text-xs font-normal">(48 ratings)</span>
                  </div>

                  {/* Features row */}
                  <div
                    className={`flex items-center gap-3 text-sm  mt-3 text-light-gray-color ${
                      card?.status !== "Available" ? "filter grayscale" : ""
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {/* Time Icon */}
                      <PiChefHatFill className="text-[--yellow-color]" />
                      <span className="text-xs font-normal">30 Min</span>
                    </div>

                    <div className="flex items-center gap-1">
                      {/* Customizable Icon */}
                      <img src={sparkleStar} alt="" />
                      <span className="text-xs font-normal">Customizable</span>
                    </div>

                    <div className="flex items-center gap-1">
                      {/* Size Icon */}
                      <PiPizzaLight className="text-[--yellow-color]" />
                      <span className="text-xs font-normal">3 Sizes</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm font-normal ${
                      position == "center" ? "line-clamp-3" : "line-clamp-4"
                    } overflow-scroll hidden-scroll text-color-gray mt-3`}
                  >
                    A variety of delicious vegetarian pizzas made with fresh
                    ingredients, signature sauces, and cheesy
                  </p>

                  {/* Price and Add button */}
                  <div
                    className={`mt-2 flex items-center justify-between ${
                      card?.status !== "Available" ? "filter grayscale" : ""
                    }`}
                  >
                    <span
                      className={`${
                        card?.status !== "Available"
                          ? " text-gray-600"
                          : " text-gray-800"
                      } text-xl font-medium`}
                    >
                      ₹{card?.price}
                    </span>
                    {FilterPrevOrdCustmId?.find(
                      (i) => i?.orderID == card?.id
                    ) ? (
                      <>
                        <IncrementDecrementFunctionality
                          ItemId={card?.id}
                          isOptionSelected={true}
                          prevCount={
                            FilterPrevOrdCustmId?.find(
                              (i) => i?.orderID == card?.id
                            )?.quantity
                          }
                          // GetQuantity={GetQuantity}
                        />
                      </>
                    ) : (
                      <button
                        className={` ${
                          card?.status !== "Available"
                            ? "border text-color-gray cursor-not-allowed"
                            : "cashier-light-bg-color text-color-black"
                        } px-5 py-1 w-20 h-8 text-sm font-normal rounded-md`}
                        onClick={() => HandleItemAdd(card)}
                      >
                        ADD
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-10 top-1/2 transform -translate-y-1/2 z-30"
        onClick={handlePrev}
      >
        <IoIosArrowBack className="bg-white w-14 h-14 p-2 border-cashier cashier-main-text-color rounded-full text-xl hover:bg-[--cashier-main-color] hover:text-white" />
      </button>
      <button
        className="absolute right-10 top-1/2 transform -translate-y-1/2 z-30"
        onClick={handleNext}
      >
        <IoIosArrowForward className="bg-white w-14 h-14 p-2 border-cashier cashier-main-text-color rounded-full text-xl hover:bg-[--cashier-main-color] hover:text-white" />
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  MenuFromRedux: state?.menu,
});

export default connect(mapStateToProps, {})(MenuDetailsCardSlider);
