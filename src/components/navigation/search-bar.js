import React, { Component } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      newCity: {},
      results: [],
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(city) {
    this.setState({
      city: city.label,
      newCity: city,
    });
  }

  renderAutoComplete() {
    return this.state.results.map((result, idx) => {
      return (
        <div
          className="result-container"
          key={idx}
          onClick={() => {
            this.handleOnClick(result);
          }}
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
    this.props.onSubmit(this.state.newCity);

    this.setState({
      city: "",
      results: [],
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
          autoComplete="off"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <div className="results-wrapper">
          <div className="results-container">{this.renderAutoComplete()}</div>
        </div>
      </form>
    );
  }
}
