import React, { Component } from "react";

export default class AirQuality extends Component {
  constructor(props) {
    super(props);
  }

  getAirQualityMessage(aqi) {
    if (typeof aqi === "number") {
      let status = "";
      if (aqi < 50) {
        status = "Good";
        return status;
      } else if (aqi > 50 && aqi < 100) {
        status = "Moderate";
        return status;
      } else if (aqi > 100 && aqi < 150) {
        status = "Unhealthy For Sensitive Groups";
        return status;
      } else if (aqi > 150 && aqi < 200) {
        status = "Unhealthy";
        return status;
      } else if (aqi > 200 && aqi < 300) {
        status = "Very Unhealthy";
        return status;
      } else if (aqi > 300 && aqi < 500) {
        status = "Hazardous";
        return status;
      }
    }
  }
  render() {
    const { city, state, country, current } = this.props.cityAQI;
    const { pollution } = current;
    const { aqius, aqicn } = pollution;

    return (
      <div className="air-quality-wrapper">
        <div className="air-quality-container">
          <div className="air-quality-info-wrapper">
            <div className="title">
              <div className="subtitle"> Air Quality Index In:</div>
              <div className="current-city">{`${city}, ${state}, ${country}`}</div>
            </div>
            <div className="air-quality-info">
              <div className="circles">
                <div className="circle">
                  <div className="aqi">{aqius}</div>
                </div>
                <div className="circle">
                  <div className="aqi">{aqicn}</div>
                </div>
              </div>
              <div className="air-quality-message">
                {this.getAirQualityMessage(aqius)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
