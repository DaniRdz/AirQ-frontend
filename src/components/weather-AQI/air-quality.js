import React, { Component } from "react";

export default class AirQuality extends Component {
  constructor(props) {
    super(props);
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
              <div className="air-quality-message">GOOD</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
