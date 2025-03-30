import React from "react";

const Dropdown = ({ title, options, func, value }) => {
  return (
    <div className="select">
      <select value={value} name="format" id="format" onChange={func}>
        <option value="" disabled>
          {title}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
