// import React from "react";
// import Slider from "react-slick";
// // Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // Images
// import Menu1 from "../../Assets/Images/menuCategory/menu1.png";
// import Menu2 from "../../Assets/Images/menuCategory/menu2.png";
// import Menu3 from "../../Assets/Images/menuCategory/menu3.png";

// const MenuSlider = () => {
//     var settings = {
//         dots: false,
//         speed: 500,
//         // autoplay: true,
//         // autoplaySpeed: 1000,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };
//     return (
//         <>
//             <div className="slider-container">
//                 <h1 className="font-bold text-lg border-t-2">Categories</h1>
//                 <Slider {...settings} className="menu-category-slider">
//                     <div className="mx-3">
//                         <h3>1</h3>
//                         <img src={Menu1} alt="Loading" />
//                         <p>Starters</p>
//                     </div>
//                     <div className="mx-3">
//                         <h3>2</h3>
//                         <img src={Menu2} alt="Loading" />
//                         <p>Breads</p>
//                     </div>
//                     <div className="mx-3">
//                         <h3>3</h3>
//                         <img src={Menu3} alt="Loading" />
//                         <p>Paneer</p>

//                     </div>
//                     <div className="mx-3">
//                         <h3>4</h3>
//                         <img src={Menu1} alt="Loading" />
//                         <p>Chinese</p>

//                     </div>
//                     <div className="mx-3">
//                         <h3>5</h3>
//                         <img src={Menu2} alt="Loading" />
//                         <p> Thali</p>
//                     </div>
//                     <div className="mx-3">
//                         <h3>6</h3>
//                         <img src={Menu1} alt="Loading" />
//                        <p> Desserts</p>
//                     </div>
//                     <div className="mx-3">
//                         <h3>7</h3>
//                         <img src={Menu3} alt="Loading" />
//                        <p>Chinese</p>
//                     </div>
//                     <div className="mx-3">
//                         <h3>8</h3>
//                         <img src={Menu2} alt="Loading" />
//                        <p>Paneer</p>
//                     </div>
//                     <div className="mx-3">
//                         <h3>9</h3>
//                         <img src={Menu3} alt="Loading" />
//                        <p>Chinese</p>
//                     </div>
//                     <div className="mx-3">
//                         <h3>10</h3>
//                         <img src={Menu2} alt="Loading" />
//                         <p>Breads</p>
//                     </div>
//                 </Slider>
//             </div>
//         </>
//     );
// };
// export default MenuSlider;


// src/ImageSlider.js
// import React, { useState } from "react";

// // import images
// import Food1 from "../../Assets/Images/menuCard-img/food-1.jpeg";
// import Food2 from "../../Assets/Images/menuCard-img/food-2.jpeg";
// import Food3 from "../../Assets/Images/menuCard-img/food-3.jpeg";
// import Food4 from "../../Assets/Images/menuCard-img/food-2.jpeg";
// import Food5 from "../../Assets/Images/menuCard-img/food-1.jpeg";
// import Food6 from "../../Assets/Images/menuCard-img/food-2.jpeg";
// import Food7 from "../../Assets/Images/menuCard-img/food-3.jpeg";
// import Food8 from "../../Assets/Images/menuCard-img/food-1.jpeg";
// import Food9 from "../../Assets/Images/menuCard-img/food-2.jpeg";
// import Food10 from "../../Assets/Images/menuCard-img/food-3.jpeg";

// const images = [
//   Food1,
//   Food2,
//   Food3,
//   Food1,
//   Food2,
//   Food3,
//   Food2,
//   Food1,
//   Food3,
//   Food1,
//   Food2,
//   Food1,
//   Food3,
//   Food1,
// ];

// const MenuSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slidesToShow = 4;

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + slidesToShow >= images.length ? 0 : prevIndex + slidesToShow
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - slidesToShow < 0
//         ? images.length - slidesToShow
//         : prevIndex - slidesToShow
//     );
//   };

//   return (
//     <div className="flex ">
//       {/* Slider Container */}
//       <div className={`flex-shrink w-full  relative overflow-hidden`}>
//         <div
//           className="flex w-full transition-transform duration-300"
//         //   style={{
//         //     transform: `translateX(-${(currentIndex / images.length) * 100}%)`,
//         //   }}
//         >
//           {images?.map((img, index) => (
//             <div className="">
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Slide ${index + 1}`}
//                 className=" object-cover my-2 rounded transition-transform duration-300"
//               />
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
//         >
//           &lt;
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MenuSlider;





// import React from "react";
// import Slider from "react-slick";
// // Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // Images
// import Menu1 from "../../Assets/Images/menuCategory/menu1.png";
// import Menu2 from "../../Assets/Images/menuCategory/menu2.png";
// import Menu3 from "../../Assets/Images/menuCategory/menu3.png";

// const MenuSlider = () => {
//     const settings = {
//         dots: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     initialSlide: 1,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//             }
//         ]
//     };

//     return (
//         <div className="slider-container">
//             <h1 className="font-bold text-lg border-t-2">Categories</h1>
//             <Slider {...settings} className="menu-category-slider">
//                 {[...Array(10).keys()].map((_, index) => (
//                     <div key={index} className="mx-3">
//                         <h3>{index + 1}</h3>
//                         <img src={index % 2 === 0 ? Menu1 : index % 3 === 0 ? Menu2 : Menu3} alt="Menu Item" />
//                         <p>{index % 3 === 0 ? 'Starters' : index % 3 === 1 ? 'Breads' : 'Paneer'}</p>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default MenuSlider;

// import React, { useState, useEffect } from 'react';
// import Menu1 from '../../Assets/Images/menuCategory/menu1.png';
// import Menu2 from '../../Assets/Images/menuCategory/menu2.png';
// import Menu3 from '../../Assets/Images/menuCategory/menu3.png';
// // import './MenuSlider.css'; // Import your CSS styles here

// const MenuSlider = () => {
//     const [itemsToShow, setItemsToShow] = useState(3);
//     const items = [
//         { id: 1, src: Menu1, label: 'Starters' },
//         { id: 2, src: Menu2, label: 'Breads' },
//         { id: 3, src: Menu3, label: 'Paneer' },
//         { id: 4, src: Menu1, label: 'Chinese' },
//         { id: 5, src: Menu2, label: 'Thali' },
//         { id: 6, src: Menu1, label: 'Desserts' },
//         { id: 7, src: Menu3, label: 'Chinese' },
//         { id: 8, src: Menu2, label: 'Paneer' },
//         { id: 9, src: Menu3, label: 'Chinese' },
//         { id: 10, src: Menu2, label: 'Breads' },
//     ];

//     useEffect(() => {
//         const handleResize = () => {
//             const width = window.innerWidth;
//             if (width < 480) {
//                 setItemsToShow(1);
//             } else if (width < 200) {
//                 setItemsToShow(2);
//             } else {
//                 setItemsToShow(20);
//             }
//         };
        
//         window.addEventListener('resize', handleResize);
//         handleResize(); // Call once to set initial value

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return (
//         <div className="slider-container">
//             <h1 className="font-bold text-lg border-t-2">Categories</h1>
//             <div className="slider hidden-scroll">
//                 {items.map((item, index) => (
//                     <div 
//                         key={item.id} 
//                         className="slider-item" 
//                         style={{
//                             display: index < itemsToShow ? 'block' : 'none',
//                         }}
//                     >
//                         <h3>{item.id}</h3>
//                         <img src={item.src} alt="Menu Item" />
//                         <p>{item.label}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MenuSlider;

import React, { useState, useEffect } from 'react';
import Menu1 from '../../Assets/Images/menuCategory/menu1.png';
import Menu2 from '../../Assets/Images/menuCategory/menu2.png';
import Menu3 from '../../Assets/Images/menuCategory/menu3.png';
// import './MenuSlider.css'; // Import your CSS styles here

const MenuSlider = () => {
    const [itemsToShow, setItemsToShow] = useState(3);
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0); // Active index state

    const items = [
        { id: 1, src: Menu1, label: 'Starters' },
        { id: 2, src: Menu2, label: 'Breads' },
        { id: 3, src: Menu3, label: 'Paneer' },
        { id: 4, src: Menu1, label: 'Chinese' },
        { id: 5, src: Menu2, label: 'Thali' },
        { id: 6, src: Menu1, label: 'Desserts' },
        { id: 7, src: Menu3, label: 'Chinese' },
        { id: 8, src: Menu2, label: 'Paneer' },
        { id: 9, src: Menu3, label: 'Chinese' },
        { id: 10, src: Menu2, label: 'Breads' },
    ];

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 480) {
                setItemsToShow(1);
            } else if (width < 768) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3); // Adjusted for desktop view
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once to set initial value

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNext = () => {
        setCurrentStartIndex((prevIndex) => {
            const newIndex = prevIndex + itemsToShow;
            return newIndex < items.length ? newIndex : 0; // Loop back to the start
        });
    };

    const handlePrev = () => {
        setCurrentStartIndex((prevIndex) => {
            const newIndex = prevIndex - itemsToShow;
            return newIndex >= 0 ? newIndex : items.length - itemsToShow; // Loop to the end
        });
    };
    const handleItemClick = (index) => {
        setActiveIndex(index); // Set the clicked index as active 
    };

    return (
        <div className="slider-container">
            <h1 className="font-bold text-lg border-t-2">Categories</h1>
            <div className="slider-overlay">
                <div 
                    className="slider hidden-scroll" 
                    style={{ 
                        transform: `translateX(-${(currentStartIndex / items.length) * 100}%)`, 
                        transition: 'transform 0.5s ease-in-out' 
                    }}
                >
                    {items.map((item, index) => (
                        <div 
                            key={item.id} 
                            className={`slider-item ${activeIndex === index ? 'active' : ''}`} 
                            onClick={() => handleItemClick(index)}
                        >
                            <div className='flex justify-center mb-2'>
                                <img src={item.src} alt={item.label} className={activeIndex === index ? 'active-image' : ''} /> {/* Optionally, you can add a class to the image itself */}
                            </div>
                            <div className='flex justify-between'>
                                <p>{ item.label}</p>
                                <span className={`${activeIndex === index ? 'bg-[--cashier-main-color] text-white' : 'bg-[#EAEAEA]'}  rounded-md px-2`}>0</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="slider-controls">
                <button className='menu-category-prev' onClick={handlePrev}>Prev</button>
                <button className='menu-category-next' onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default MenuSlider; 