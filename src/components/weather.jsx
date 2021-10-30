import "./weather.css";
import React from "react";

const Weather = (props) => {
    return (
        <div className="container">
            <div>
                <h1 className="location">{props.location}</h1>
                <h5 className="weather-icon">
                    <img src={"http://openweathermap.org/img/wn/" + props.icon + "@2x.png"} alt="" />
                </h5>
                <h4 className="description">{props.description}</h4>
                <h1 className="temp">{props.temp}</h1>
                {minmaxTemp(props.temp_min, props.temp_max)}
            </div>
        </div>
    );
};


const minmaxTemp = (min, max) => {
    return (
        <h3 className="minmaxTemp">
            <span>{min}</span>
            <span>{max}</span>
        </h3>
    );
};


export default Weather;