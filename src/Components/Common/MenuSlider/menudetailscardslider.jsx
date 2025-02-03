// import React from 'react'
// import Slider from "react-slick";
// const MenuDetailsCardSlider = () => {
//     const settings = {
//         className: "center",
//         centerMode: true,
//         infinite: true,
//         centerPadding: "60px",
//         slidesToShow: 3,
//         speed: 500
//     };
//     return (
//         <>
//             <div className="slider-container">
//                 <Slider {...settings}>
//                     <div className='bg-white border-2 border-orange-300 p-4'>
//                         <h3>1</h3>
//                     </div>
//                     <div className='bg-white border-2 border-orange-300 p-4'>
//                         <h3>2</h3>
//                     </div>
//                     <div className='bg-white border-2 border-orange-300  p-4'>
//                         <h3>3</h3>
//                     </div>
//                     <div className='bg-white border-2 border-orange-300  p-4'>
//                         <h3>4</h3>
//                     </div>
//                     <div className='bg-white border-2 border-orange-300 p-4'>
//                         <h3>5</h3>
//                     </div>
//                     <div className='bg-white border-2 border-orange-300 p-4'>
//                         <h3>6</h3>
//                     </div>
//                 </Slider>
//             </div>
//         </>
//     )
// }

// export default MenuDetailsCardSlider;  


// CardSlider.js
// import React, { useState } from 'react';

// function MenuDetailsCardSlider() {
//   // Example cards data
//   const cards = [
//     { id: 1,  bg:"bg-red", title: 'Card 1', description: 'This is card 1 description' },
//     { id: 2,  bg:"bg-green", title: 'Card 2', description: 'This is card 2 description' },
//     { id: 3,  bg:"bg-red", title: 'Card 3', description: 'This is card 3 description' },
//     { id: 4,  bg:"bg-blue", title: 'Card 4', description: 'This is card 4 description' },
//     { id: 5,  bg:"bg-purple", title: 'Card 5', description: 'This is card 5 description' },
//     // Add more cards as needed
//   ];

//   const [currentCardIndex, setCurrentCardIndex] = useState(1); // Start showing from the first card group

//   const handlePrev = () => {
//     if (currentCardIndex > 1) {
//       setCurrentCardIndex(currentCardIndex - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentCardIndex < cards.length - 1) { // Considering we show 3 cards at a time
//       setCurrentCardIndex(currentCardIndex + 1);
//     }
//   };

//   const displayedCards = cards.slice(currentCardIndex - 1, currentCardIndex + 2);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="relative flex justify-center items-center">
//         {displayedCards.map((card, index) => (
//           <div
//             key={card.id}
//             className={`transition duration-1000 ${
//               index === 1 ? 'scale-125' : 'scale-100'
//             } hover:scale-125 mx-4 relative z-10 `}
//           >
//             <div
//               className={`${card?.bg}-500 rounded-lg shadow-lg p-4 w-64 h-80 flex flex-col justify-center items-center`}
//             >
//               <h2 className="text-lg font-bold mb-2">{card.title}</h2>
//               <p className="text-gray-600">{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         className="absolute left-0 bg-gray-200 rounded-full p-2 ml-4 z-20"
//         onClick={handlePrev}
//       >
//         &#60;
//       </button>
//       <button
//         className="absolute right-0 bg-gray-200 rounded-full p-2 mr-4 z-20"
//         onClick={handleNext}
//       >
//         &#62;
//       </button>
//     </div>
//   );
// }

// export default MenuDetailsCardSlider;

import React, { useState } from 'react';

function MenuDetailsCardSlider() {
  // Example cards data
  const cards = [
    { id: 1, bg: "bg-red", title: 'Card 1', description: 'This is card 1 description' },
    { id: 2, bg: "bg-green", title: 'Card 2', description: 'This is card 2 description' },
    { id: 3, bg: "bg-red", title: 'Card 3', description: 'This is card 3 description' },
    { id: 4, bg: "bg-blue", title: 'Card 4', description: 'This is card 4 description' },
    { id: 5, bg: "bg-purple", title: 'Card 5', description: 'This is card 5 description' },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Start showing from the first card

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const displayedCards = [
    cards[(currentCardIndex - 1 + cards.length) % cards.length],
    cards[currentCardIndex],
    cards[(currentCardIndex + 1) % cards.length]
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex justify-center items-center">
        {displayedCards.map((card, index) => (
          <div
            key={card.id}
            className={`transition duration-1000 ${
              index === 1 ? 'scale-125' : 'scale-100'
            } hover:scale-125 mx-4 relative z-10`}
          >
            <div
              className={`${card.bg}-500 rounded-lg shadow-lg p-4 w-64 h-80 flex flex-col justify-center items-center`}
            >
              <h2 className="text-lg font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 bg-gray-200 rounded-full p-2 ml-4 z-20"
        onClick={handlePrev}
      >
        &#60;
      </button>
      <button
        className="absolute right-0 bg-gray-200 rounded-full p-2 mr-4 z-20"
        onClick={handleNext}
      >
        &#62;
      </button>
    </div>
  );
}

export default MenuDetailsCardSlider;