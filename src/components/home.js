import React, { Component } from "react";

import Weather from "./weather-AQI/weather";
import AirQuality from "./weather-AQI/air-quality";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home-container">
        <Weather cityWeather={this.props.cityData} />
        <AirQuality cityAQI={this.props.cityData} />
      </div>
    );
  }
}
