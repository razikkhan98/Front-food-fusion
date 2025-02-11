import React, { useState } from "react";

// =============
// import Images
// =============
import foodimg from "../../Assets/Images/menuCard-img/food-1.jpeg";
import Food1 from "../../Assets/Images/menuCard-img/food-1.jpeg";
import Food2 from "../../Assets/Images/menuCard-img/food-2.jpeg";
import Food3 from "../../Assets/Images/menuCard-img/food-3.jpeg";
import sparkleStar from "../../Assets/Images/menuPageImages/svgs/Sparkle.svg";

import { PiChefHatFill, PiPizzaLight } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function MenuDetailsCardSlider() {
  // Example cards data
  // JSON
  const cards = [
    {
      img: Food1,
      cardBorder: "menu-green-borderCard",
      name: "Cheese Balls",
      status: "Available",
      price: 100,
      colorStatus: "text-light-green bg-light-green",
    },
    {
      img: Food2,
      cardBorder: "menu-green-borderCard",
      name: "Veg Pizza",
      status: "Available",
      price: 120,
      colorStatus: "text-light-green bg-light-green",
    },
    {
      img: Food3,
      cardBorder: "menu-red-borderCard",
      name: "Sandwich",
      status: "N Available",
      price: 150,
      colorStatus: "text-color-red bg-color-red",
    },
    {
      img: Food1,
      name: "Cheese Balls",
      cardBorder: "menu-green-borderCard",
      status: "Available",
      price: 380,
      colorStatus: "text-light-green bg-light-green",
    },
    {
      img: Food1,
      cardBorder: "menu-green-borderCard",
      name: "Cheese Balls",
      status: "Available",
      price: 700,
      colorStatus: "text-light-green bg-light-green",
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Start showing from the first card

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const displayedCards = [
    cards[(currentCardIndex - 1 + cards.length) % cards.length],
    cards[currentCardIndex],
    cards[(currentCardIndex + 1) % cards.length],
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="relative flex justify-center items-center"
      >
        {displayedCards.map((card, index) => (
          <div
            key={card.id}
            className={`transition duration-500 
               ${
                 index === 1
                   ? "scale-125 w-80 h-[440px]"
                   : "scale-100 w-72 h-96"
               }
              mx-10 relative z-10 
             `}
          >
            <div
              className={`max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden ${
                card?.status !== "Available" ? "filter grayscale" : ""
              } `}
            >
              {/* Image + "Available" badge */}
              <div className="relative">
                <img
                  className="w-full h-48 object-cover border-4 border-white rounded-t-3xl"
                  src={card?.img}
                  alt="Veg Pizza"
                />
                <span className="absolute top-2 right-2 bg-slate-400 opacity-75 px-2 py-0.5 rounded-full">X</span>
              </div>

              {/* Card content */}
              <div className="p-4 pt-1">
                {/* Title & Ratings */}
                <div className="flex justify-between text-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {card?.name}
                  </h2>
                  <span
                    className={`text-end flex items-center px-1  ${card?.colorStatus}`}
                  >
                    <span
                      className={`${
                        card?.status == "Available"
                          ? "bg-green-500"
                          : "bg-red-500"
                      } inline-block h-1 me-1 p-0.5 rounded-full`}
                    ></span>
                    {card?.status}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  {/* Star Icon */}
           
                  <span className="mr-1">4.5</span>
                  <span>(48 ratings)</span>
                </div>

                {/* Features row */}
                <div className="flex items-center gap-3 text-sm text-gray-600 mt-3">
                  <div className="flex items-center gap-1">
                    {/* Time Icon */}
                    <PiChefHatFill className="text-[--yellow-color]" />
                    <span>30 Min</span>
                  </div>

                  <div className="flex items-center gap-1">
                    {/* Customizable Icon */}
                    <img src={sparkleStar} alt="" />
                    <span>Customizable</span>
                  </div>

                  <div className="flex items-center gap-1">
                    {/* Size Icon */}
                    <PiPizzaLight className="text-[--yellow-color]" />
                    <span>3 Sizes</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 mt-3">
                  A variety of delicious vegetarian pizzas made with fresh
                  ingredients, signature sauces, and cheesy goodness. Perfect
                  for every veggie lover.
                </p>

                {/* Price and Add button */}
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`${
                      card?.status !== "Available"
                        ? " text-gray-600"
                        : " text-gray-800"
                    } text-xl font-bold`}
                  >
                    ₹{card?.price}
                  </span>
                  <button
                    className={` ${
                      card?.status !== "Available"
                        ? "border-2 text-gray-600 cursor-not-allowed"
                        : "bg-[--cashier-main-color] text-black"
                    } px-5 py-1 rounded-md`}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="absolute left-0" onClick={handlePrev}>
        <IoIosArrowBack className="bg-white w-10 h-10 p-2 border border-[--cashier-main-color] text-[--cashier-main-color] rounded-full text-xl hover:bg-[--cashier-main-color] hover:text-white active:bg-[--cashier-main-color]" />
      </button>
      <button className="absolute right-0" onClick={handleNext}>
        <IoIosArrowForward className="bg-white w-10 h-10 p-2 border border-[--cashier-main-color] text-[--cashier-main-color] rounded-full text-xl hover:bg-[--cashier-main-color] hover:text-white active:bg-[--cashier-main-color]" />
      </button>
    </div>
  );
}

export default MenuDetailsCardSlider;
