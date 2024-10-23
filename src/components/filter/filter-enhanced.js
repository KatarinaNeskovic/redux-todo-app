import { connect } from "react-redux";
import { setFilter } from "../../store/actions";
import './filter.css'
import { Filter } from "./filter";

const mapDispatchToProps = {
    setFilter,
  };
  
  export const FilterEnhanced = connect(null, mapDispatchToProps)(Filter);