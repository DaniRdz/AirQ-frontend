import React, { Component } from "react";
import axios from "axios";

import Navigation from "./navigation/navigation";
import Home from "./home";
import Icons from "../helpers/icons";

export default class App extends Component {
  constructor() {
    super();

    Icons();

    this.state = {
      latitude: "",
      longitude: "",
      cityData: {
        city: "",
        state: "",
        country: "",
        current: {
          weather: { tp: "", hu: "", pr: "", ws: "", wd: "", ts: "", ic: "" },
          pollution: { aqicn: "", aqius: "" },
        },
      },
      recentCities: [],
    };
    this.getNewPosition = this.getNewPosition.bind(this);
    this.getNewCityData = this.getNewCityData.bind(this);
    this.handleDeleteCity = this.handleDeleteCity.bind(this);
  }
  handleDeleteCity(deletedCity) {
    this.setState({
      recentCities: this.state.recentCities.filter((city) => {
        return city.location.coordinates !== deletedCity.location.coordinates;
      }),
    });
  }
  getNewCityData(city) {
    this.setState({
      cityData: city,
    });
  }
  getNewPosition(position) {
    const { x, y } = position;

    this.getCityData(y, x);
  }
  getCityData(lat, long) {
    axios
      .get(
        `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${long}&key=9ba4fdda-f64c-41d4-a73e-588304adae14`
      )
      .then((response) => {
        this.setState({
          cityData: response.data.data,
          recentCities: this.state.recentCities.concat(response.data.data),
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
    this.getCityData(this.state.latitude, this.state.longitude);
  }
  render() {
    return (
      <div className="container">
        <Navigation
          recentCities={this.state.recentCities}
          getNewPosition={this.getNewPosition}
          getNewCityData={this.getNewCityData}
          handleDeleteCity={this.handleDeleteCity}
        />
        <Home cityData={this.state.cityData} />
      </div>
    );
  }
}
