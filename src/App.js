import "./App.css";
import countries from "./data/countries";
import Form from "./components/form";
import Weather from "./components/weather";
import React from "react";

const initial = {
  alphaTwo: undefined,
  city: undefined,
  count: 2,
  description: "",
  error: false,
  icon: undefined,
  location: undefined,
  loading: false,
  main: undefined,
  temp: [],
  temp_max: [],
  temp_min: [],
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
          temp: [
            Math.round(res.main.temp) + " K",
            Math.round((parseFloat(res.main.temp) - 273.15) * 1.8 + 32) +
              " \u00B0F",
            Math.round(parseFloat(res.main.temp) - 273.15) + " \u00B0C",
          ],
          temp_max: [
            Math.round(res.main.temp_max) + " K",
            Math.round((parseFloat(res.main.temp_max) - 273.15) * 1.8 + 32) +
              " \u00B0F",
            Math.round(parseFloat(res.main.temp_max) - 273.15) + " \u00B0C",
          ],
          temp_min: [
            Math.round(res.main.temp_min) + " K",
            Math.round((parseFloat(res.main.temp_min) - 273.15) * 1.8 + 32) +
              " \u00B0F",
            Math.round(parseFloat(res.main.temp_min) - 273.15) + " \u00B0C",
          ],
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

  setCount = () => {
    this.setState({
      count: (this.state.count + 1) % 3,
    });
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
          setCount={this.setCount}
          temp={this.state.temp[this.state.count]}
          temp_max={this.state.temp_max[this.state.count]}
          temp_min={this.state.temp_min[this.state.count]}
        />
      </div>
    );
  }
}

export default App;
