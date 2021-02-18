import React, { Component } from "react";

import logo from "../../static/assets/images/logo_AQI.jpg";

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation-container">
        <div className="navigation-bar">
          <div className="logo">
            <img
              src={logo}
              style={{ borderRadius: "50%", width: "70px", height: "70px" }}
            />
          </div>
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
