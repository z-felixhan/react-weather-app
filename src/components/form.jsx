import "./form.css"
import React from 'react';

const Form = props => {
    return (
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.getWeather}>
                <div className="row">
                    <div className="col">
                        <input type="text" name="city" autoComplete="off" placeholder="City" />
                    </div>
                    <div className="col">
                        <input type="text" name="country" autoComplete="off" placeholder="Country" />
                    </div>
                </div>
                <button className="btn">Get Weather</button>
            </form>
        </div>
    );
}

function error () {
    return (
        <div>
            Please enter city and country.
        </div>
    );
}

export default Form;