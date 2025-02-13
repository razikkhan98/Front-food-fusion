// import React, { useState } from "react";

// const Dropdown = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   // Sample data for the dropdown options
//   const options = [
//     "Apple",
//     "Banana",
//     "Orange",
//     "Mango",
//     "Strawberry",
//     "Pineapple",
//     "Grapes",
//   ];

//   // Filter options based on the input value
//   const filteredOptions = options.filter((option) =>
//     option.toLowerCase().includes(inputValue.toLowerCase())
//   );

//   return (
//     <div className="relative">
//       <div className="flex items-center bg-transparent border-white border-2 rounded-full px-4 py-2 w-full max-w-md">
//         <span className="text-gray-400">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M11 4a7 7 0 100 14 7 7 0 000-14zm10 10l-4-4"
//             />
//           </svg>
//         </span>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onFocus={() => setIsOpen(true)}
//           onBlur={() => setIsOpen(false)} // Optional: You can keep the dropdown open by managing this state differently
//           placeholder="Table or Order status"
//           className="bg-transparent text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-0 border-none ml-2 w-full"
//         />
//       </div>

//       {/* Dropdown menu */}
//       {isOpen && inputValue && (
//         <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md max-h-60 overflow-y-auto z-10">
//           {filteredOptions.length > 0 ? (
//             filteredOptions.map((option, index) => (
//               <li
//                 key={index}
//                 className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
//                 onMouseDown={() => setInputValue(option)}
//               >
//                 {option}
//               </li>
//             ))
//           ) : (
//             <li className="px-4 py-2 text-gray-500">No results found</li>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dropdown;

// import React, { useState } from "react";
// import "./test.css";

// function ImageSlider() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [images, setImages] = useState([
//     {
//       id: 1,
//       url: "https://picsum.photos/200/300",
//     },
//     {
//       id: 2,
//       url: "https://picsum.photos/300/200",
//     },
//     {
//       id: 3,
//       url: "https://picsum.photos/200/200",
//     },
//     {
//       id: 4,
//       url: "https://picsum.photos/100/200",
//     },
//   ]);

//   const handleModal = (image) => {
//     setSelectedImage(image);
//     setShowModal(true);
//   };

//   const handlePrevious = () => {
//     const index = images.indexOf(selectedImage);
//     if (index === 0) {
//       return;
//     }
//     setSelectedImage(images[index - 1]);
//   };

//   const handleNext = () => {
//     const index = images.indexOf(selectedImage);
//     if (index === images.length - 1) {
//       return;
//     }
//     setSelectedImage(images[index + 1]);
//   };

//   return (
//     <div className="app">
//       {images.map((image) => (
//         <img
//           key={image.id}
//           src={image.url}
//           alt="Card Image"
//           onClick={() => handleModal(image)}
//           className="card-image"
//         />
//       ))}
//       {showModal && (
//         <div className="modal">
//           <button className="close-btn" onClick={() => setShowModal(false)}>
//             &times;
//           </button>
//           <button className="prev-btn" onClick={handlePrevious}>
//             Previous
//           </button>
//           <button className="next-btn" onClick={handleNext}>
//             Next
//           </button>
//           <div className="slider-container">
//             {images.map((img, index) => (
//               <div key={index}>
//                 {index === images.indexOf(selectedImage) ? (
//                   <>
//                   <img
//                   src={img.url}
//                   alt="Selected Image"
//                   className={`image ${index === images.indexOf(selectedImage) ? "selected" : ""}`}
//                   />
//                   {/* {console.log('images.indexOf(selectedImage): ', images.indexOf(selectedImage))} */}
//                   </>
//                 ) : (
//                   <img
//                     src={img.url}
//                     alt="Other Images"
//                     className={`image ${
//                       index < images.indexOf(selectedImage)
//                         ? "left"
//                         : "right"
//                     }`}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ImageSlider;

