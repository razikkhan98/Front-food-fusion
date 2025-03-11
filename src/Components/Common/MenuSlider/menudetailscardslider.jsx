import React, { useState, useCallback, useEffect } from "react";


import { PiChefHatFill, PiPizzaLight } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import sparkleStar from "../../Assets/Images/menuPageImages/svgs/Sparkle.svg";
import { FaStar } from "react-icons/fa6";
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti";

function MenuDetailsCardSlider({
  toggleMenuDetailModal,
  SliderDataJson,
  selectedCard,
}) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const SliderHeight = window?.screen?.height


  // useEffect to set the initial index based on selectedCard
  useEffect(() => {
      if (selectedCard) {
          const index = SliderDataJson.findIndex(item => item === selectedCard);
          if (index !== -1) {
              setCurrentCardIndex(index);
          }
      }
  }, [selectedCard, SliderDataJson]);


  const handlePrev = useCallback(() => {
    setDirection('prev');
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? SliderDataJson?.length - 1 : prevIndex - 1
    );
  }, [SliderDataJson]);

  const handleNext = useCallback(() => {
    setDirection('next');
    setCurrentCardIndex((prevIndex) =>
      prevIndex === SliderDataJson?.length - 1 ? 0 : prevIndex + 1
    );
  }, [SliderDataJson]);

  const getCardPosition = (index) => {
    const totalCards = SliderDataJson?.length || 0;
    const relativeIndex = (index - currentCardIndex + totalCards) % totalCards;
    
    if (relativeIndex === 0) return 'center';
    if (relativeIndex === 1) return 'right';
    if (relativeIndex === totalCards - 1) return 'left';
    return 'hidden';
  };


  // starts rating functionality 
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
    stars.push(
    <TiStarFullOutline key={i} className="text-[--yellow-color]" fontSize={19} />
    );
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
    stars.push(
    <TiStarHalfOutline key={i} className="text-[--yellow-color]" fontSize={19} />
    );
    } else {
    stars.push(
    <TiStarOutline key={i} className="text-[--yellow-color]" fontSize={19} />
    );
    }
    }
    return stars;
    };

  const getCardClasses = (position) => {
    const baseClasses = "absolute transition-all duration-500 ease-in-out transform";
    
    switch (position) {
      case 'center':
        return `${baseClasses} scale-125 z-20 menu-slider-center-card opacity-100 top-0 left-1/2 -translate-x-1/2`;
      case 'left':
        return `${baseClasses}  z-10 menu-slider-side-card top-0 left-0 -translate-x-1/2`;
      case 'right':
        return `${baseClasses}  z-10 menu-slider-side-card top-0 right-0 translate-x-1/2`;
      default:
        return `${baseClasses} opacity-0`;
    }
  };


  return (
    <div className="relative flex justify-center items-center h-screen w-full overflow-hidden">
      <div className="relative w-full sm:max-w-lg md:max-w-lg lg:max-w-2xl xl:max-w-3xl h-[50vh]">
        {SliderDataJson?.map((card, index) => {
          const position = getCardPosition(index);
          
          return (
            <div 
              key={card.name + index} // Use a unique key
              className={getCardClasses(position)}
            >
              <div
                className={`max-w-sm bg-white w-full h-full rounded-3xl shadow-lg overflow-hidden ${
                  card?.status !== "Available" ? "filter grayscale" : ""
                }`}
              >
                {/* Card Content (Same as previous implementation) */}
                <div className="relative">
                  <img
                    className={`w-full ${position == "center" ? 'menudetailSliderimg' :'h-40'} object-cover border-4 border-white rounded-t-3xl`}
                    src={card?.img}
                    alt="Veg Pizza"
                  />
                  {position === 'center' && (
                    <span
                      onClick={toggleMenuDetailModal}
                      className="absolute top-3 right-3 bg-white bg-opacity-25 px-2 py-2 rounded-full cursor-pointer"
                    >
                      <IoMdClose className="text-white" />
                    </span>
                  )}
                </div>

                {/* Card content */}
              <div className={`p-4 pt-1 ${position == "center" ? 'h-64 grid items-center' :''}`}>
                {/* Title & Ratings */}
                <div className="flex justify-between text-center">
                  <h2 className="text-base font-medium text-gray-800">
                    {card?.name}
                  </h2>
                  <span
                    className={`text-end flex text-xs items-center px-1  ${card?.colorStatus}`}
                  >
                    <span
                      className={`${
                        card?.status == "Available"
                          ? "bg-green-500"
                          : "bg-red-500"
                      } inline-block h-1 me-1 p-0.5  rounded-full`}
                    ></span>
                    {card?.status}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mt-1">
                  {/* Star Icon */}
                      <span className="flex me-1.5">{renderStars(2.5)}</span>
                  <span className="mr-1 text-xs font-normal">4.5</span>
                  <span className="text-xs font-normal">(48 ratings)</span>
                </div>

                {/* Features row */}
                <div className="flex items-center gap-3 text-sm text-gray-600 mt-3">
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
                <p className={`text-sm font-normal ${position == "center" ? 'h-20' :'h-20'} overflow-scroll hidden-scroll text-color-gray mt-3`}>
                  A variety of delicious vegetarian pizzas made with fresh
                  ingredients, signature sauces, and cheesy
                </p>

                {/* Price and Add button */}
                <div className="mt-2 flex items-center justify-between">
                  <span
                    className={`${
                      card?.status !== "Available"
                        ? " text-gray-600"
                        : " text-gray-800"
                    } text-xl font-medium`}
                  >
                    ₹{card?.price}
                  </span>
                  <button
                    className={` ${
                      card?.status !== "Available"
                        ? "border-2 text-color-gray cursor-not-allowed"
                        : "cashier-light-bg-color text-color-black"
                    } px-5 py-1 w-20 h-8 text-sm font-normal rounded-md`}
                  >
                    ADD
                  </button>
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

export default MenuDetailsCardSlider;