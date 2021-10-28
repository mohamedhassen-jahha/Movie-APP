import React, { Component } from "react";
import "./FilterBar.css";

export default class FilterBar extends Component {
  render() {
    return (
      <div className="filterNav">
        <h2>Filter Your Films </h2>
        <select>
          <option value="1">Choose By .. </option>
          <option value="1">Title</option>
          <option value="1">Ratting</option>
        </select>
        <input type="text" placeholder="Your choice to filter" />
        <button>Filter Films</button>
      </div>
    );
  }
}
