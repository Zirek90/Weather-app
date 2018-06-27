import React from 'react'

class WeatherConditionsTwo extends React.Component {
    // constructor(props){
    // super(props)
    // }
    render() {
        return (
            <div>
                {this.props.city && <p><span>Name: </span>{this.props.city}</p>}
                {this.props.country && <p><span>Country: </span>{this.props.country}</p>}
                {this.props.temperature && <p><span>Temperature: </span>{this.props.temperature} °C</p>}
                {this.props.pressure && <p><span>Pressure: </span>{this.props.pressure} hpa</p>}
                {this.props.humidity && <p><span>Humidity: </span>{this.props.humidity} %</p>}
                {this.props.description && <p><span>Conditions: </span>{this.props.description}</p>}
                {this.props.wind && <p><span>Speed of Wind: </span>{this.props.wind} m/s</p>}
            </div>
        )
    }
}
export default WeatherConditionsTwo;