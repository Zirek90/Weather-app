import React from 'react'

class WeatherConditions extends React.Component {
    // constructor(props){
    // super(props)
    // }
      render() {
        return (
            <div className="weather">
                {this.props.city && <p><span>Name: </span>{this.props.city}</p>}
                {this.props.country && <p><span>Country: </span>{this.props.country}</p>}
                {this.props.temperature && <p><span>Temperature: </span>{this.props.temperature} °C</p>}
                {this.props.pressure && <p><span>Pressure: </span>{this.props.pressure} hpa</p>}
                {this.props.humidity && <p><span>Humidity: </span>{this.props.humidity} %</p>}
                {this.props.description && <p><span>Conditions: </span>{this.props.description}</p>}
                {this.props.wind && <p><span>Wind: </span>{this.props.wind} m/s</p>}
                {this.props.errors && <p><span> </span>{this.props.errors}</p>}
            </div>

        )
      }
    }
export default WeatherConditions;