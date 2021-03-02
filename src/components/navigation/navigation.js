import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchBar from "./search-bar";

import logo from "../../../static/assets/images/logo_AQI.jpg";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.selectRecentSearchCity = this.selectRecentSearchCity.bind(this);
    this.handleClickDeleteRecentCity = this.handleClickDeleteRecentCity.bind(
      this
    );
  }
  handleClickDeleteRecentCity(city) {
    this.props.handleDeleteCity(city);
  }
  onSubmit(city) {
    this.props.getNewPosition(city);
  }
  selectRecentSearchCity(city) {
    this.props.getNewCityData(city);
  }
  recentSearchCities() {
    return this.props.recentCities.map((recentCity, idx) => {
      const { city, state, country, current } = recentCity;
      const { weather } = current;
      const { tp, ic } = weather;
      return (
        <div key={idx} className="miniature-city-container">
          <img
            src={`https://airvisual.com/images/${ic}.png`}
            style={{ width: "10%" }}
          />
          <div
            className="city-info"
            onClick={() => this.selectRecentSearchCity(recentCity)}
          >{`${tp}° ${city}, ${state}, ${country} `}</div>
          <div
            className="delte-btn"
            onClick={() => this.handleClickDeleteRecentCity(recentCity)}
          >
            <FontAwesomeIcon icon="trash" />
          </div>
        </div>
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
          <SearchBar onSubmit={this.onSubmit} />
        </div>
        <div className="recent-search-container">
          {this.recentSearchCities()}
        </div>
      </div>
    );
  }
}
