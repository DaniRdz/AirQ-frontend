import React, { Component } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      city: event.target.value,
    });
  }

  handleFormSubmit(event) {
    const provider = new OpenStreetMapProvider();

    provider.search({ query: this.state.city }).then((result) => {
      console.log(result);
      this.setState({
        city: "",
      });
    });
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="search-bar">
        <input
          type="text"
          name="city"
          placeholder="Search City or Zip Code"
          value={this.state.city}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
