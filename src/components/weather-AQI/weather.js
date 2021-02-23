import React, { Component } from "react";
import moment from "moment";

export default class Weather extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { city, state, country, current } = this.props.cityWeather;
    const { weather } = current;
    const { tp, hu, pr, ws, wd, ts, ic } = weather;

    return (
      <div className="weather-container">
        <div className="weather-info">
          <div className="weather-info-container">
            <div className="title">
              <div className="subtitle">Weather Today In:</div>
              <div className="current-city">{`${city}, ${state}, ${country}`}</div>
              <div className="time">
                {` As of ${moment(ts).format("h:mm a")}`}
              </div>
            </div>
            <div className="weather-state-grades">
              <div className="grades">{`${tp}°`}</div>
              <img src={`https://airvisual.com/images/${ic}.png`} />
            </div>
            <div className="weather-state-wrapper">
              <div className="weather-state-info">
                <div className="humidity">{`Humidity: ${hu}%`}</div>
                <div className="wind-speed">{`Wind: ${ws} m/s`}</div>
                <div className="pressure">{`Pressure: ${pr} mb`}</div>
                <div className="wind-direction">{`Wind Direction: ${wd}°`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}