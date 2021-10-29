import ReactStars from "react-stars";
import React from "react";
import "./FilterBar.css";

function FilterBar(props) {
  return (
    <div className="filterNav">
      <h2>Filter Your Films </h2>

      <ReactStars
        count={5}
        onChange={(e) => props.setSearchByRate(e * 2)}
        size={38}
        activeColor="#ffd700"
        value={props.searchByRate}
      />

      <input
        type="text"
        className="FilterText"
        placeholder="Your choice to filter"
        onChange={(e) => props.setSearchByName(e.target.value)}
      />
    </div>
  );
}

export default FilterBar;
