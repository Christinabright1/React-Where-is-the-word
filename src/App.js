import React from "react";
import "./styles.css";
import { CountryList } from "./countryList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      searchValue: "",
      selectValue: ""
    };
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeRegion = this.onChangeRegion.bind(this);
    this.removeDuplicates = this.removeDuplicates.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeRegion(event) {
    //console.log(event.target.value);
    this.setState({
      selectValue: event.target.value
    });
  }
  //input value
  onChangeCountry(ev) {
    console.log(ev.target.value);
    this.setState({
      searchValue: ev.target.value
    });
  }
  /* delete duplicate value*/
  removeDuplicates(regions) {
    const deleteValue = Array.from(new Set(regions));
    return deleteValue;
  }
  renderOptions() {
    const allRegions = this.state.countries.map((user) => user.region);
    const uniqueRegion = this.removeDuplicates(allRegions);

    //console.log(uniqueRegion);
    //console.log(allRegions);
    return ["Filter by region", ...uniqueRegion].map((region, index) => (
      <option key={index}>{region}</option>
    ));
  }
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((countries) => this.setState({ countries: countries }));
  }
  //handleSubmit
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    const { countries, selectValue, searchValue } = this.state;
    //filter countries by name
    const filteredData = () => {
      let filtered;
      
      let filteredRegion = countries.filter((country) =>
        country.region.toLowerCase().includes(selectValue.toLowerCase())
      );
      let filteredName= countries.filter((country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase()));
      
      if (selectValue !== "Filter by region") {
        filtered = filteredRegion.filter((country) =>
          country.name.toLowerCase().includes(searchValue.toLowerCase())
        );
      }else{
        filtered= filteredName;
      }
      return filtered;
    };

    return (
      <div className="countries">
        <div className="header">
          <h2>Where is the world?</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="search country"
            className="search-bar"
            value={this.searchValue}
            onChange={this.onChangeCountry}
          />
          <select onChange={this.onChangeRegion}>{this.renderOptions()}</select>
          <CountryList countries={filteredData()} />
        </form>
      </div>
    );
  }
}

export default App;
