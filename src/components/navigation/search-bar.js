import React, { Component } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      results: [],
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(city) {
    this.setState({
      city: city.label,
    });
  }

  renderAutoComplete() {
    return this.state.results.map((result, idx) => {
      return (
        <div
          onClick={() => {
            this.handleOnClick(result);
          }}
          key={idx}
        >
          {result.label}
        </div>
      );
    });
  }

  handleChange(event) {
    this.setState({
      city: event.target.value,
    });
    const provider = new OpenStreetMapProvider();

    provider.search({ query: this.state.city }).then((results) => {
      this.setState({
        results,
      });
    });
  }

  handleFormSubmit(event) {
    console.log(this.state.city);

    const provider = new OpenStreetMapProvider();

    provider.search({ query: "" }).then((results) => {
      this.setState({
        results,
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
        {this.renderAutoComplete()}
      </form>
    );
  }
}
