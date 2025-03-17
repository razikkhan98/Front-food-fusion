// src/AutoComplete.js
import React, { useState } from "react";

const AutoOrderProcessDropdown = ({ options ,selectedOption}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
      setIsOpen(true);
    } else {
      setFilteredOptions([]);
      setIsOpen(false);
    }
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    selectedOption(option)
    setFilteredOptions([]);
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="h-14 w-full border-light-gray-color px-3 rounded-lg text-xs font-normal focus-visible:border-0"
        placeholder="Type or select a valid reason here"
      />
      {isOpen && filteredOptions.length > 0 && (
        <ul className="hidden-scroll px-2 absolute top-full left-0 right-0 bg-white list-none z-10 h-52 overflow-y-auto">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="text-xs font-normal px-2 py-3 mt-2 dropdown-option-color cursor-pointer border-b"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoOrderProcessDropdown;
