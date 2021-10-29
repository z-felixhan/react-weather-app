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
            </div>
        </div>
    );
};

export default Weather;