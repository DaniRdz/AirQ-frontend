import React, { Component } from "react";

export default class Weather extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { city, state, country, current } = this.props.cityWeather;

    return (
      <div className="weather-container">
        <div className="weather-info">
          <div>Weather Today In:</div>
          <div>{`${city}, ${state}, ${country}`}</div>
          <div>
            <div>{`°`}</div>
            <div>image goes here</div>
          </div>
        </div>
      </div>
    );
  }
}
