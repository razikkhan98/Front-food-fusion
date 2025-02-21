import React, { useState } from "react";
import  '../../Assets/css/menuSearchBar.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = ({
  pageHeading = [],
  buttons = [],
  icons = [],
  btn_purple,
  selectedTab,
}) => {
  // =========
  // states
  // ===========
  const [CurrentSelectTab, setCurrentSelectTab] = useState();
  const [inputValue, setInputValue] = useState('');
  const [inputBar, setInputBar] = useState(false);
  // =========
  // Functions
  // ===========
  const HandleTabFunctionality = (e) => {
    setCurrentSelectTab(e);
    selectedTab(e);
  };

  // const [inputValue, setInputValue] = useState('');
  
  const handleFocus = () => {
    setInputValue('');
  };

  const handleBlur = () => {
    if (inputValue === '') {
      setInputValue('search');
      setInputBar(!inputBar)
    }
  };

  const handleClick = (index) => {
    // if (inputValue === '') {
      // setInputValue('search');
      setInputBar(true)
    // }
    // console.log('index: ', index);
    // This function can be called to set focus on the input
    // const inputElement = document.getElementById(`btn-search-${index}`);
    // if (inputElement) {
    //   inputElement.focus();
    // }
  };

  return (
    <div>
      {pageHeading?.length > 0 && (
        <div className="text-sm my-3 flex items-center">
          {pageHeading.length === 1 ? (
            <span className="mr-2 font-medium text-base text-color-black flex items-center">
              {" "}
              <IoIosArrowBack className="text-color-gray me-2 text-xl" />{" "}
              {pageHeading[0]}
            </span> // Show "< Table" if only one
          ) : (
            pageHeading.map((heading, index) => (
              <span
                key={index}
                className={`font-medium text-base flex items-center ${
                  index === 0 ? "text-color-gray" : "text-black "
                }`}
              >
                {heading}{" "}
                {index < pageHeading.length - 1 && (
                  <IoIosArrowForward className="text-color-gray mx-2 text-xl" />
                )}
              </span>
            ))
          )}
        </div>
      )}
      <div class="flex gap-4 pb-3">
        {buttons?.length > 0 &&
          buttons.map((floor, index) => (
            <NavLink to={floor?.btn_path}>
              <button
                key={index}
                type="button"
                onClick={() => HandleTabFunctionality(floor?.btn_name)}
                className={`${
                  CurrentSelectTab
                    ? floor?.btn_name == CurrentSelectTab
                      ? "bg-[--cashier-light-color] text-[--black-color]"
                      : "bg-[--cashier-very-light-color]"
                    : index == 0 ? "bg-[--cashier-light-color] text-[--black-color]" :"bg-[--cashier-very-light-color]"
                } hover:bg-[--cashier-light-color] text-[--gray-color] font-medium hover:text-[--black-color] py-1 px-4 border border-[--cashier-light-color] hover:border-transparent rounded-full`}
              >
                {floor?.btn_name}
              </button>
            </NavLink>
          ))}

        {icons?.length > 0 && (
          <div className="flex gap-4 ml-auto">
            {icons.map((item, index) => (
    //           <div
    //             key={index}
    //             onFocus={handleFocus}
    //             Value={inputValue}
    //             className="material-icons flex navbar-icon-bg-color rounded-full p-2 z-0"
    //           >
    //             <img src={item.nav_img} alt={item.alt} />
    //             <input
    //   type="text"
    //   id="btn-search"
    //   className={`${index == 0 ? "ser h-11" : "hidden"} `}
      
      
    //   onBlur={handleBlur}
    //   style={{
    //     height: inputValue === 'search' ? '' : '',
    //     width: inputValue === 'search' ? '' : '400px',
    //     fontSize: inputValue === 'search' ? '' : '',
    //     padding: inputValue === 'search' ? '' : ''
    //   }}
      
    // />
    //           </div>
    <div
    key={index}
    onClick={() => handleClick(index)} // Set focus on click
    className="material-icons flex navbar-icon-bg-color rounded-full p-2 z-0"
  >
    <img src={item.nav_img} alt={item.alt} />
    <input
      type="text"
      id={`btn-search-${index}`} // Unique ID for each input
      className={`${index === 0 ? `${inputBar ? 'nav-search': 'w-0'} ser`  : "hidden"} `}
      // value={inputValue}
      onBlur={handleBlur}
      onFocus={handleFocus}
      // style={{
      //   height: inputBar ? '' : '',
      //   width: inputBar ? '400px': '', // Adjust width as needed
      //   fontSize: inputBar ? '' : '',
      //   padding: inputBar ? '' : ''
      // }}
    />
  </div>
            ))}
          </div>
        )}

        {btn_purple?.length > 0 && (
          <button className="px-7 py-2.5 text-sm font-medium text-purple-color border-purple-color hover:bg-[--purple-color] hover:text-white rounded-full">
            {btn_purple}
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
