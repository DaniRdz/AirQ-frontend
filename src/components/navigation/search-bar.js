import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input type="text" name="city" placeholder="Search City or Zip Code" />
      </div>
    );
  }
}
