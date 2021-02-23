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
      <div className="air-quality-container">
        <div>{`${city}, ${state}, ${country}`}</div>

        <div>{aqius}</div>
        <div>{aqicn}</div>
      </div>
    );
  }
}
