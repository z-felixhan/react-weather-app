import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Weather = () => {
    return (
        <div className="container">
            <div className="cards">
                <h1>City</h1>
                <h5>
                    <FontAwesomeIcon icon={ faSun } />
                </h5>
                <h1>10&deg;</h1>
                { minmaxTemp(24, 19) }
                <h4>Sunny</h4>
            </div>
        </div>
    );
};


const minmaxTemp = (min, max) => {
    return (
        <h3>
            <span>{ min }&deg;</span>
            <span>{ max }&deg;</span>
        </h3>
    );
};


export default Weather;