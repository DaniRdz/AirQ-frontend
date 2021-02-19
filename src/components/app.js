import React, { Component } from "react";

import Navigation from "./navigation";
import Home from "./home";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Home />
      </div>
    );
  }
}
