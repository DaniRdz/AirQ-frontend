import React, { Component } from "react";
import axios from "axios";

import Navigation from "./navigation";
import Home from "./home";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      latitude: "",
      longitude: "",
      cityData: {
        city: "",
        state: "",
        country: "",
        current: {
          weather: { tp: "", hu: "", pr: "", ws: "", wd: "", ts: "", ic: "" },
          pollution: {},
        },
      },
    };
  }
  getCityData() {
    axios
      .get(
        `http://api.airvisual.com/v2/nearest_city?lat=${this.state.latitude}&lon=${this.state.longitude}&key=9ba4fdda-f64c-41d4-a73e-588304adae14`
      )
      .then((response) => {
        this.setState({
          cityData: response.data.data,
        });
      })
      .catch((error) => {
        console.log("getCityData error", error);
      });
  }
  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      this.setState({
        longitude,
        latitude,
      });
    });
  }
  componentDidMount() {
    this.getCurrentPosition();
    this.getCityData();
  }
  render() {
    return (
      <div className="container">
        <Navigation />
        <Home cityData={this.state.cityData} />
      </div>
    );
  }
}
