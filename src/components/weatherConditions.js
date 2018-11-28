import React from 'react'

const WeatherConditions = (props) => {
    return (
        <div className="weather">
            {props.city && <p><span>Name: </span>{props.city}</p>}
            {props.country && <p><span>Country: </span>{props.country}</p>}
            {props.temperature && <p><span>Temperature: </span>{props.temperature} °C</p>}
            {props.pressure && <p><span>Pressure: </span>{props.pressure} hpa</p>}
            {props.humidity && <p><span>Humidity: </span>{props.humidity} %</p>}
            {props.description && <p><span>Conditions: </span>{props.description}</p>}
            {props.wind && <p><span>Wind: </span>{props.wind} m/s</p>}
            {props.errors && <p><span> </span>{props.errors}</p>}
        </div>
    )
}

export default WeatherConditions;