import React, { Component } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  renderAutoComplete() {
    return this.state.results.map((result) => {
      return <div>{result.label}</div>;
    });
  }

  handleChange(event) {
    const provider = new OpenStreetMapProvider();

    provider.search({ query: event.target.value }).then((results) => {
      console.log(results);
      this.setState({
        results,
      });
    });
  }

  handleFormSubmit(event) {
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
