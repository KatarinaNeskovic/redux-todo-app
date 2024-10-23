import React from "react";
import "./filter.css";

const Filter = ({ setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="filter-container">
      <select onChange={handleFilterChange} className="filter-select">
        <option value="SHOW_ALL">  All </option>
        <option value="SHOW_COMPLETED"> Completed </option>
        <option value="SHOW_ACTIVE"> Active </option>
      </select>
    </div>
  );
};



export {Filter}