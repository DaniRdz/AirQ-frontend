import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation-container">
        <div className="navigation-bar">
          <div>LOGO goes here</div>
          <div className="search-bar">
            <input
              type="text"
              name="city"
              placeholder="Search City or Zip Code"
            />
          </div>
        </div>
        <div className="recent-search-container">list of recent cities</div>
      </div>
    );
  }
}
