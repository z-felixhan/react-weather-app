import "./App.css";
import countries from "./data/countries";
import Form from "./components/form";
import Weather from "./components/weather";
import React from "react";

const initial = {
  alphaTwo: undefined,
  city: undefined,
  description: "",
  error: false,
  icon: undefined,
  location: undefined,
  loading: false,
  main: undefined,
  temp: undefined,
  temp_max: undefined,
  temp_min: undefined,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...initial,
    };
  }

  getWeather = async (e) => {
    e.preventDefault();
    this.setState({ error: false, loading: true });

    const city = e.target.elements.city.value;
    const country = this.state.alphaTwo;
    console.log(this.state);

    if (city && country) {
      try {
        const req = await fetch(
          `https://orient.onrender.com/openweathermap/weather?q=${city},${country}`
        );

        const res = await req.json();

        this.setState({
          description: res.weather[0].description.toUpperCase(),
          error: false,
          icon: res.weather[0].icon,
          loading: false,
          location: res.name + ", " + res.sys.country,
          main: res.weather[0].main,
          temp: res.main.temp + "\u00B0",
          temp_max: res.main.temp_max + "\u00B0",
          temp_min: res.main.temp_min + "\u00B0",
        });
      } catch (err) {
        this.setState({
          error: true,
          loading: false,
        });
      }
    } else {
      this.setState({
        error: true,
        loading: false,
      });
    }
  };

  setAlphaTwo = (alphaTwo) => {
    this.setState(alphaTwo);
  };

  setError = (error) => {
    this.setState(error);
  };

  setLoading = (loading) => {
    this.setState(loading);
  };

  render() {
    return (
      <div className="App">
        <Form
          countries={countries}
          error={this.state.error}
          getWeather={this.getWeather}
          initial={initial}
          setAlphaTwo={this.setAlphaTwo}
          setError={this.setError}
        />
        <Weather
          description={this.state.description}
          error={this.state.error}
          icon={this.state.icon}
          loading={this.state.loading}
          location={this.state.location}
          main={this.state.main}
          temp={this.state.temp}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
        />
      </div>
    );
  }
}

export default App;
