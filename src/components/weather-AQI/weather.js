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
          <div>Weather Today In:</div>
          <div>{`${city}, ${state}, ${country}`}</div>
          <div>{moment(ts).format("MMMM Do YYYY, h:mm:ss a")}</div>
          <div>
            <div>{`${tp}°`}</div>
            <div>image goes here</div>
          </div>
          <div>
            <div>{`Humidity: ${hu}%`}</div>
            <div>{`Wind: ${ws}m/s`}</div>
            <div>{`Pressure: ${pr}mb`}</div>
            <div>{`Wind Direction: ${wd}°`}</div>
          </div>
        </div>
      </div>
    );
  }
}
