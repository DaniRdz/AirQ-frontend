import React, { Component } from "react";

import Navigation from "./navigation";
import Home from "./home";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      latitude: "",
      longitude: "",
    };
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
  }
  render() {
    return (
      <div className="container">
        <Navigation />
        <Home />
      </div>
    );
  }
}
