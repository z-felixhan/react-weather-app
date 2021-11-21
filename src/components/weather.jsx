import "./weather.css";
import React from "react";
import { CircularProgress } from "@mui/material";

const Weather = (props) => {
  return (
    <div className="weather-container">
      {!props.loading ? (
        <div>
          <h1 className="location">{props.location}</h1>
          <h5 className="weather-icon">
            <img
              src={
                props.icon &&
                "http://openweathermap.org/img/wn/" + props.icon + "@2x.png"
              }
              alt=""
            />
          </h5>
          <h4 className="description">{props.description}</h4>
          <h1>
            <span className="temp" onClick={props.setCount}>
              {props.temp}
            </span>
          </h1>
          {minmaxTemp(props.temp_min, props.temp_max, props)}
        </div>
      ) : (
        <div className="loader-container">
          <CircularProgress
            sx={{
              position: "relative",
              top: "50%",
            }}
          />
        </div>
      )}
    </div>
  );
};

const minmaxTemp = (min, max, props) => {
  return (
    <h3 className="minmaxTemp">
      <span onClick={props.setCount}>{min}</span>
      <span onClick={props.setCount}>{max}</span>
    </h3>
  );
};

export default Weather;
