// import React, { useState, useRef, useEffect } from 'react';

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(1); // Start at the center (1)
//   const sliderRef = useRef(null);

//   const slides = [
//     { id: 0, content: 'Slide 1', backgroundColor: 'bg-blue-200' },
//     { id: 1, content: 'Slide 2', backgroundColor: 'bg-green-200' },
//     { id: 2, content: 'Slide red', backgroundColor: 'bg-red-200' },
//   ];

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//   };

//   useEffect(() => {
//     if (sliderRef.current) {
//       sliderRef.current.style.transition = 'transform 0.5s ease-in-out'; // Add smooth transition
//       sliderRef.current.style.transform = `translateX(-${currentIndex * (100 / slides.length)}%)`;
//     }
//     //Optional: set automatic sliding

//     const intervalId = setInterval(() => {
//         goToNext();
//     }, 50000000)

//     return () => clearInterval(intervalId); //Clean up interval on unmount.
//   }, [currentIndex, slides.length]);



//   return (
//     <div className="relative w-full overflow-hidden">
//       <div className="flex transition-transform duration-500 ease-in-out"
//            style={{ width: `${slides.length * 100}%` }}
//            ref={sliderRef}>
//         {slides.map((slide, index) => (
//           <div key={slide.id}
//                className={`w-1/3 flex-shrink-0 flex items-center justify-center h-64 text-2xl font-bold ${slide.backgroundColor} ${index === currentIndex ? 'scale-125' : 'scale-100'} transition-transform duration-300 z-10`}>
//             {slide.content}
//           </div>
//         ))}
//       </div>

//       <button
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-20"
//         onClick={goToPrevious}
//       >
//         &#8249;
//       </button>
//       <button
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-20"
//         onClick={goToNext}
//       >
//         &#8250;
//       </button>
//     </div>
//   );
// };

// export default Slider;


import React, { useState, useEffect } from 'react';

// Card Slider Component
const Slider = () => {
  // Sample card data
  const cards = [
    {
      id: 1,
      title: 'Card 1',
      description: 'Description for Card 1',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Description for Card 2',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Description for Card 3',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'Description for Card 4',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 5,
      title: 'Card 5',
      description: 'Description for Card 5',
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle slide to next card
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % cards.length
    );
  };

  // Handle slide to previous card
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  // Render individual card
  const renderCard = (card, index) => {
    // Calculate position relative to current index
    const offset = index - currentIndex;
    
    // Determine card styles based on position
    const getCardStyles = () => {
      switch(offset) {
        case -1:
          return ' scale-75 w-[20rem] right-20 -translate-x-20 z-10';
        case 0:
          return 'opacity-100 w-[25rem] scale-100 z-20 shadow-2xl';
        case 1:
          return ' scale-75 w-[20rem] left-20 translate-x-20 z-10';
        default:
          return 'opacity-0 scale-50 z-0';
      }
    };

    return (
      <div 
        key={card.id}
        className={`
          absolute 
          transition-all 
          duration-500 
          ease-in-out 
          
          ${getCardStyles()}
        `}
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src={card.image} 
            alt={card.title} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-10 z-30 bg-blue-500 text-white p-2 rounded-full"
      >
        ←
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-10 z-30 bg-blue-500 text-white p-2 rounded-full"
      >
        →
      </button>

      {/* Card Container */}
      <div className="relative  h-96 flex items-center justify-center">
        {cards.map((card, index) => renderCard(card, index))}
      </div>
    </div>
  );
};

export default Slider;