import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { city, country, state } = this.props.cityData;
    return (
      <div className="home-container">
        <div>{`${city}, ${state}, ${country}`}</div>
      </div>
    );
  }
}
