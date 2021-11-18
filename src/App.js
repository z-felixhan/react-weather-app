import "./App.css";
import Form from "./components/form";
import Weather from "./components/weather";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      description: "",
      error: false,
      icon: undefined,
      location: undefined,
      main: undefined,
      temp: undefined,
      temp_max: undefined,
      temp_min: undefined,
    };
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {
      const req = await fetch(
        `https://orient.onrender.com/openweathermap/weather?q=${city},${country}`
      );

      const res = await req.json();

      console.log(res);

      this.setState({
        description: res.weather[0].description.toUpperCase(),
        error: false,
        icon: res.weather[0].icon,
        location: res.name + ", " + res.sys.country,
        main: res.weather[0].main,
        temp: res.main.temp + "\u00B0",
        temp_max: res.main.temp_max + "\u00B0",
        temp_min: res.main.temp_min + "\u00B0",
      });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Weather
          description={this.state.description}
          error={this.state.error}
          icon={this.state.icon}
          location={this.state.location}
          main={this.state.main}
          temp={this.state.temp}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
        />
        <Form error={this.state.error} getWeather={this.getWeather} />
      </div>
    );
  }
}

export default App;
