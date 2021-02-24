import React, { Component } from "react";

import logo from "../../static/assets/images/logo_AQI.jpg";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  recentSearchCities() {
    return this.props.recentCities.map((recentCity, idx) => {
      const { city, state, country, current } = recentCity;
      const { weather } = current;
      const { tp, ic } = weather;
      return (
        <div
          key={idx}
          className="miniature-city-container"
        >{`${city}, ${state}, ${country} ${tp}°`}</div>
      );
    });
  }
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
        <div className="recent-search-container">
          {this.recentSearchCities()}
        </div>
      </div>
    );
  }
}
