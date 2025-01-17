// // App.js

// import React, { useState } from 'react';

// const Test = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Sidebar */}
//       <div className="w-1/4 bg-gray-800 text-white p-4 fixed h-full">
//         <h2 className="text-xl">Left Sidebar</h2>
//         <ul>
//           <li>Item 1</li>
//           <li>Item 2</li>
//           <li>Item 3</li>
//         </ul>
//       </div>

//       {/* Main Content Area */}
//       <div className={`flex flex-grow ml-64 ${isSidebarOpen ? 'mr-64' : 'mr-0'} transition-all duration-300`}>
//         <div className="flex flex-wrap justify-center p-4 w-full">
//           {Array.from({ length: 7 }, (_, index) => (
//             <div key={index} className="w-1/3 p-2">
//               <div className="bg-white rounded-lg shadow-md p-4 text-center">
//                 Card {index + 1}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Sidebar */}
//       <div className={`fixed right-0 top-0 bg-gray-200 p-4 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//         <button onClick={toggleSidebar} className="bg-blue-500 text-white rounded px-2 py-1 mb-4">
//           {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
//         </button>
//         {isSidebarOpen && (
//           <div className="flex flex-wrap">
//             {Array.from({ length: 4 }, (_, index) => (
//               <div key={index} className="w-full p-2">
//                 <div className="bg-white rounded-lg shadow-md p-4 text-center">
//                   Card {index + 8}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Test;

// App.js

// import React, { useState } from 'react';

// const Test = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Sidebar */}
//       <div className="w-1/4 bg-gray-800 text-white p-4 fixed h-full">
//         <h2 className="text-xl">Left Sidebar</h2>
//         <ul>
//           <li>Item 1</li>
//           <li>Item 2</li>
//           <li>Item 3</li>
//         </ul>
//       </div>

//       {/* Main Content Area */}
//       <div className={`flex flex-grow ml-64 transition-all duration-300 ${isSidebarOpen ? 'mr-64' : 'mr-0'}`}>
//         <div className="flex flex-wrap justify-center items-center p-4 w-full h-full">
//           {isSidebarOpen
//             ? Array.from({ length: 3 }, (_, index) => (
//                 <div key={index} className="w-1/3 p-2"  onClick={toggleSidebar} >
//                   <div className="bg-white rounded-lg shadow-md p-4 text-center">
//                     Card {index + 1}
//                   </div>
//                 </div>
//               ))
//             : Array.from({ length: 4 }, (_, index) => (
//                 <div key={index} className="w-1/4 p-2">
//                   <div  onClick={toggleSidebar}  className="bg-white rounded-lg shadow-md p-4 text-center">
//                     Card {index + 1}
//                   </div>
//                 </div>
//               ))}
//         </div>
//       </div>

//       {/* Right Sidebar */}
//       <div
//         className={`fixed right-0 top-0 bg-gray-200 p-4 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} h-full`}
//       >
//         <button
//           onClick={toggleSidebar}
//           className="bg-blue-500 text-white rounded px-2 py-1 mb-4"
//         >
//           {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
//         </button>
//         {isSidebarOpen && (
//           <div className="flex flex-wrap">
//             {Array.from({ length: 4 }, (_, index) => (
//               <div key={index} className="w-full p-2">
//                 <div className="bg-white rounded-lg shadow-md p-4 text-center">
//                   Card {index + 4}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Test;


