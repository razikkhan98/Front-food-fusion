// import React, { useState } from "react";

// // =============
// // import Images
// // =============
// // import foodimg from "../../Assets/Images/menuCard-img/food-1.jpeg";
// // import Food1 from "../../Assets/Images/menuCard-img/food-1.jpeg";
// // import Food2 from "../../Assets/Images/menuCard-img/food-2.jpeg";
// // import Food3 from "../../Assets/Images/menuCard-img/food-3.jpeg";
// import sparkleStar from "../../Assets/Images/menuPageImages/svgs/Sparkle.svg";

// import { PiChefHatFill, PiPizzaLight } from "react-icons/pi";
// import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";

// function MenuDetailsCardSlider({
//   toggleMenuDetailModal,
//   SliderDataJson,
//   selectedCard,
// }) {
//   // states
//   const [currentCardIndex, setCurrentCardIndex] = useState(0); // Start showing from the first card

//   // Functions
//   const handlePrev = () => {
//     setCurrentCardIndex((prevIndex) =>
//       prevIndex === 0 ? SliderDataJson?.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentCardIndex((prevIndex) =>
//       prevIndex === SliderDataJson?.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const displayedCards = [
//     SliderDataJson[(currentCardIndex - 1 + SliderDataJson?.length) % SliderDataJson?.length],
//     SliderDataJson[currentCardIndex],
//     SliderDataJson[(currentCardIndex + 1) % SliderDataJson?.length],
//   ];

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="relative flex justify-center items-center">
//         {displayedCards.map((card, index) => (
//           <div
//             key={card.id}
//             className={`transition duration-500 
//                ${
//                  index === 1
//                    ? "scale-125 w-[310px] h-[440px]"
//                    : "scale-100 w-[273px] h-[387px]"
//                }
//               mx-10 relative z-10 
//              `}
//           >
//             <div
//               className={`max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden ${
//                 card?.status !== "Available" ? "filter grayscale" : ""
//               } `}
//             >
//               {/* Image + "Available" badge */}
//               <div className="relative">
//                 <img
//                   className="w-full h-48 object-cover border-4 border-white rounded-t-3xl"
//                   src={card?.img}
//                   alt="Veg Pizza"
//                 />
//                 {index === 1 ? (
//                   <span
//                     onClick={toggleMenuDetailModal}
//                     className="absolute top-3 right-3 bg-white bg-opacity-25  px-2 py-2 rounded-full cursor-pointer"
//                   >
//                     <IoMdClose className="text-white" />
//                   </span>
//                 ) : null}
//               </div>

//               {/* Card content */}
//               <div className="p-4 pt-1">
//                 {/* Title & Ratings */}
//                 <div className="flex justify-between text-center">
//                   <h2 className="text-base font-medium text-gray-800">
//                     {card?.name}
//                   </h2>
//                   <span
//                     className={`text-end flex text-xs items-center px-1  ${card?.colorStatus}`}
//                   >
//                     <span
//                       className={`${
//                         card?.status == "Available"
//                           ? "bg-green-500"
//                           : "bg-red-500"
//                       } inline-block h-1 me-1 p-0.5  rounded-full`}
//                     ></span>
//                     {card?.status}
//                   </span>
//                 </div>
//                 <div className="flex items-center text-gray-600 mt-1">
//                   {/* Star Icon */}

//                   <span className="mr-1 text-xs font-normal">4.5</span>
//                   <span className="text-xs font-normal">(48 ratings)</span>
//                 </div>

//                 {/* Features row */}
//                 <div className="flex items-center gap-3 text-sm text-gray-600 mt-3">
//                   <div className="flex items-center gap-1">
//                     {/* Time Icon */}
//                     <PiChefHatFill className="text-[--yellow-color]" />
//                     <span className="text-xs font-normal">30 Min</span>
//                   </div>

//                   <div className="flex items-center gap-1">
//                     {/* Customizable Icon */}
//                     <img src={sparkleStar} alt="" />
//                     <span className="text-xs font-normal">Customizable</span>
//                   </div>

//                   <div className="flex items-center gap-1">
//                     {/* Size Icon */}
//                     <PiPizzaLight className="text-[--yellow-color]" />
//                     <span className="text-xs font-normal">3 Sizes</span>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="text-sm font-normal text-[--gray-color] mt-3">
//                   A variety of delicious vegetarian pizzas made with fresh
//                   ingredients, signature sauces, and cheesy goodness. Perfect
//                   for every veggie lover.
//                 </p>

//                 {/* Price and Add button */}
//                 <div className="mt-4 flex items-center justify-between">
//                   <span
//                     className={`${
//                       card?.status !== "Available"
//                         ? " text-gray-600"
//                         : " text-gray-800"
//                     } text-xl font-medium`}
//                   >
//                     ₹{card?.price}
//                   </span>
//                   <button
//                     className={` ${
//                       card?.status !== "Available"
//                         ? "border-2 text-[--gray-color] cursor-not-allowed"
//                         : "cashier-light-bg-color text-black"
//                     } px-5 py-1 w-20 h-8 text-sm font-normal rounded-md`}
//                   >
//                     ADD
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="absolute left-0" onClick={handlePrev}>
//         <IoIosArrowBack className="bg-white w-10 h-10 p-2 border border-[--cashier-main-color] text-[--cashier-main-color] rounded-full text-xl hover:bg-[--cashier-main-color] hover:text-white active:bg-[--cashier-main-color]" />
//       </button>
//       <button className="absolute right-0" onClick={handleNext}>
//         <IoIosArrowForward className="bg-white w-10 h-10 p-2 border border-[--cashier-main-color] text-[--cashier-main-color] rounded-full text-xl hover:bg-[--cashier-main-color] hover:text-white active:bg-[--cashier-main-color]" />
//       </button>
//     </div>
//   );
// }

// export default MenuDetailsCardSlider;

import React, { useState, useCallback } from "react";
import { PiChefHatFill, PiPizzaLight } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import sparkleStar from "../../Assets/Images/menuPageImages/svgs/Sparkle.svg";

function MenuDetailsCardSlider({
  toggleMenuDetailModal,
  SliderDataJson,
  selectedCard,
}) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [direction, setDirection] = useState(null);

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
const getSideCards = ()=>{

}

  const getCardClasses = (position) => {
    const baseClasses = "absolute transition-all duration-500 ease-in-out transform";
    
    switch (position) {
      case 'center':
        return `${baseClasses} scale-125 z-20 w-[310px] h-[440px] opacity-100 top-0 left-1/2 -translate-x-1/2`;
      case 'left':
        return `${baseClasses}  z-10 w-[273px] h-[388px]  top-0 left-0 -translate-x-1/2`;
      case 'right':
        return `${baseClasses}  z-10 w-[273px] h-[388px]  top-0 right-0 translate-x-1/2`;
      default:
        return `${baseClasses} opacity-0`;
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen w-full overflow-hidden">
      <div className="relative w-full max-w-4xl h-[500px]">
        {SliderDataJson?.map((card, index) => {
          const position = getCardPosition(index);
          
          return (
            <div 
              key={card.id} 
              className={getCardClasses(position)}
              // style={{ 
              //   width: position === 'center' ? '310px' : '273px',
              //   height: position === 'center' ? '440px' : '388px'
              // }}
            >
              <div
                className={`max-w-sm bg-white w-full h-full rounded-3xl shadow-lg overflow-hidden ${
                  card?.status !== "Available" ? "filter grayscale" : ""
                }`}
              >
                {/* Card Content (Same as previous implementation) */}
                <div className="relative">
                  <img
                    className={`w-full ${position == "center" ? 'h-[182px]' :'h-[160px]'} object-cover border-4 border-white rounded-t-3xl`}
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
              <div className={`p-4 pt-1 ${position == "center" ? 'h-[252px] grid items-center' :''}`}>
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
                <p className={`text-sm font-normal ${position == "center" ? 'h-20' :'h-[77px]'} overflow-scroll hidden-scroll text-[--gray-color] mt-3`}>
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
                        ? "border-2 text-[--gray-color] cursor-not-allowed"
                        : "cashier-light-bg-color text-black"
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
        <IoIosArrowBack className="bg-white w-10 h-10 p-2 border border-[--cashier-main-color] text-[--cashier-main-color] rounded-full text-xl hover:bg-[--cashier-main-color] hover:text-white" />
      </button>
      <button 
        className="absolute right-10 top-1/2 transform -translate-y-1/2 z-30" 
        onClick={handleNext}
      >
        <IoIosArrowForward className="bg-white w-10 h-10 p-2 border border-[--cashier-main-color] text-[--cashier-main-color] rounded-full text-xl hover:bg-[--cashier-main-color] hover:text-white" />
      </button>
    </div>
  );
}

export default MenuDetailsCardSlider;