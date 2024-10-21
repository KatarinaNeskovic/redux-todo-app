import React from "react";
import "./Filter.css";
import { setFilter } from "../store/actions";
import { connect } from "react-redux";


const Filter = ({ setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="filter-container">
      <select onChange={handleFilterChange}>
        <option value="SHOW_ALL"> All </option>
        <option value="SHOW_COMPLETED"> Completed </option>
        <option value="SHOW_ACTIVE"> Active </option>
      </select>
    </div>
  );
};

const mapDispatchToProps = {
  setFilter
};

export default connect(null, mapDispatchToProps)(Filter);
