// import React, { useState, useEffect } from "react";
// import Menu1 from "../../Assets/Images/menuCategory/menu1.png";
// import Menu2 from "../../Assets/Images/menuCategory/menu2.png";
// import Menu3 from "../../Assets/Images/menuCategory/menu3.png";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// // import './MenuSlider.css'; // Import your CSS styles here

// // ==========
// // Import Json
// // ==========

// const items = [
//   { id: 1, src: Menu1, label: "Starters" },
//   { id: 2, src: Menu2, label: "Breads" },
//   { id: 3, src: Menu3, label: "Paneer" },
//   { id: 4, src: Menu1, label: "Chinese" },
//   { id: 5, src: Menu2, label: "Thali" },
//   { id: 6, src: Menu1, label: "Desserts" },
//   { id: 7, src: Menu3, label: "Chinese" },
//   { id: 8, src: Menu2, label: "Paneer" },
//   { id: 9, src: Menu3, label: "Chinese" },
//   { id: 10, src: Menu2, label: "Breads" },
// ];
// const MenuSlider = () => {
//   // ==========
//   //  States
//   // ==========

//   const [itemsToShow, setItemsToShow] = useState(1);
//   const [currentStartIndex, setCurrentStartIndex] = useState(0);
  // const [activeIndex, setActiveIndex] = useState(0); // Active index state

//   // ==========
//   //  Functions
//   // ==========

//   const handleNext = () => {
//     setCurrentStartIndex((prevIndex) => {
//       const newIndex = prevIndex + itemsToShow;
//       return newIndex < items.length ? newIndex : 0; // Loop back to the start
//     });
//   };

//   const handlePrev = () => {
//     setCurrentStartIndex((prevIndex) => {
//       const newIndex = prevIndex - itemsToShow;
//       return newIndex >= 0 ? newIndex : items.length - itemsToShow; // Loop to the end
//     });
//   };
//   const handleItemClick = (index) => {
//     setActiveIndex(index); // Set the clicked index as active
//   };
//   // ==========
//   //  useEffects
//   // ==========

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 480) {
//         setItemsToShow(1);
//       } else if (width < 768) {
//         setItemsToShow(2);
//       } else {
//         setItemsToShow(1); // Adjusted for desktop view
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Call once to set initial value

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
    // <div className="slider-container">
    //   <h1 className="font-bold text-lg ">Categories</h1>
    //   <div className="slider-overlay">
    //     <div
    //       className="slider hidden-scroll w-screen"
    //       style={{
    //         transform: `translateX(-${
    //           (currentStartIndex / items.length) * 100
    //         }%)`,
    //         transition: "transform 0.5s ease-in-out",
    //       }}
    //     >
    //       {items.map((item, index) => (
    //         <div
    //           key={item.id}
    //           className={`slider-item ${activeIndex === index ? "active" : ""}`}
    //           onClick={() => handleItemClick(index)}
    //         >
    //           <div className="flex justify-center mb-2">
    //             <img
    //               src={item.src}
    //               alt={item.label}
    //               className={activeIndex === index ? "active-image" : ""}
    //             />{" "}
    //             {/* Optionally, you can add a class to the image itself */}
    //           </div>
    //           <div className="flex justify-evenly">
    //             <p className="text-base font-normal">{item.label}</p>
    //             <span
    //               className={`${
    //                 activeIndex === index
    //                   ? "bg-[--cashier-main-color] text-white"
    //                   : "bg-[#EAEAEA]"
    //               }  rounded-md text-sm px-2 pt-0.5`}
    //             >
    //               0
    //             </span>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="slider-controls">
    //     <button className="menu-category-prev " onClick={handlePrev}>
    //       <IoIosArrowBack className="bg-white w-6 h-6 p-1 border border-[--cashier-main-color] text-[--cashier-main-color] rounded-full text-xl hover:bg-[--cashier-main-color] hover:text-white active:bg-[--cashier-main-color]" />
    //     </button>
    //     <button className="menu-category-next" onClick={handleNext}>
    //       <IoIosArrowForward className="bg-white w-6 h-6 p-1 border border-[--cashier-main-color] text-[--cashier-main-color] rounded-full text-xl hover:bg-[--cashier-main-color] hover:text-white active:bg-[--cashier-main-color]" />
    //     </button>
    //   </div>
    // </div>
  // );
// };

// export default MenuSlider;







import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu1 from "../../Assets/Images/menuCategory/menu1.png";
import Menu2 from "../../Assets/Images/menuCategory/menu2.png";
import Menu3 from "../../Assets/Images/menuCategory/menu3.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const items = [
  { id: 1, src: Menu1, label: "Starters" },
  { id: 2, src: Menu2, label: "Breads" },
  { id: 3, src: Menu3, label: "Paneer" },
  { id: 4, src: Menu1, label: "Chinese" },
  { id: 5, src: Menu2, label: "Thali" },
  { id: 6, src: Menu1, label: "Desserts" },
  { id: 7, src: Menu3, label: "Chinese" },
  { id: 8, src: Menu2, label: "Paneer" },
  { id: 9, src: Menu3, label: "Chinese" },
  { id: 10, src: Menu2, label: "Breads" },
];


function MenuSlider({Noslide}) {
  // =========
  // State
  // =========
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Noslide,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    // =========
  // Functions
  // =========



  return (
    <div className="slider-container">
    <h1 className="font-bold text-lg ">Categories</h1>
    <div className="slider-overlay menu-category-slider">

      <Slider {...settings}>
        {items?.map((item, index) => (

            <div
            key={item.id}
            className={`slider-item ${activeIndex === index ? "" : ""}`}
            // onClick={() => handleItemClick(index)}
          >
            <div className="flex justify-center mb-2">
              <img
                src={item.src}
                alt={item.label}
                className={activeIndex === index ? "" : ""}
              />{" "}
              {/* Optionally, you can add a class to the image itself */}
            </div>
            <div className="flex justify-evenly">
              <p className="text-base font-normal">{item.label}</p>
              <span
                className={`${
                  activeIndex === index
                    ? "bg-[--cashier-main-color] text-white"
                    : "bg-[#EAEAEA]"
                }  rounded-md text-sm px-2 pt-0.5`}
              >
                0
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}

// Custom arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (

        <button className="menu-category-prev " onClick={onClick}>
          <IoIosArrowBack className="bg-white w-6 h-6 p-1 border border-[--cashier-main-color] text-[--cashier-main-color] rounded-full text-xl hover:bg-[--cashier-main-color] hover:text-white active:bg-[--cashier-main-color]" />
        </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (

          <button className="menu-category-next z-10" onClick={onClick}>
          <IoIosArrowForward className="bg-white w-6 h-6 p-1 border border-[--cashier-main-color] text-[--cashier-main-color] rounded-full text-xl hover:bg-[--cashier-main-color] hover:text-white active:bg-[--cashier-main-color]" />
        </button>
  );
}


export default MenuSlider;