import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchBar from "./search-bar";

import logo from "../../../static/assets/images/logo_AQI.jpg";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xPositionBar: 0,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.selectRecentSearchCity = this.selectRecentSearchCity.bind(this);
    this.handleClickDeleteRecentCity = this.handleClickDeleteRecentCity.bind(
      this
    );
    this.handleLeftCarouselClick = this.handleLeftCarouselClick.bind(this);
    this.handleRightCarouselClick = this.handleRightCarouselClick.bind(this);
  }
  handleRightCarouselClick(xPositionBar) {
    let xPosition = xPositionBar;
    xPosition -= 362;

    this.setState({
      xPositionBar: xPosition,
    });
  }
  handleLeftCarouselClick(xPositionBar) {
    let xPosition = xPositionBar;
    xPosition += 362;

    this.setState({
      xPositionBar: xPosition,
    });
  }
  handleClickDeleteRecentCity(city) {
    this.props.handleDeleteCity(city);
  }
  onSubmit(city) {
    this.props.getNewPosition(city);
    this.setState({
      xPositionBar: 0,
    });
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
        <div className="recent-search-wrapper">
          {this.state.xPositionBar !== 0 ? (
            <div
              className="carousel-btn shadow-left"
              onClick={() => {
                this.handleLeftCarouselClick(this.state.xPositionBar);
              }}
            >
              <FontAwesomeIcon icon="chevron-left" />
            </div>
          ) : (
            <div></div>
          )}

          <div
            className="recent-search-container"
            style={{ transform: `translateX(${this.state.xPositionBar}px)` }}
          >
            {this.recentSearchCities()}
          </div>
          {this.props.recentCities.length * -362 >=
          this.state.xPositionBar - (window.innerWidth - 160) ? (
            <div></div>
          ) : (
            <div
              className="carousel-btn shadow-right"
              onClick={() => {
                this.handleRightCarouselClick(this.state.xPositionBar);
              }}
            >
              <FontAwesomeIcon icon="chevron-right" />
            </div>
          )}
        </div>
      </div>
    );
  }
}
