import React from 'react'
import WeatherConditions from "./components/weatherConditions"

class AppTwo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: "",
            long: "",
            city: "",
            country: "",
            temperature: "",
            pressure: "",
            humidity: "",
            description: "",
            wind: "",
            errors:""
        }
    }

    componentDidMount() {
        var that = this;

        navigator.geolocation.getCurrentPosition((position, $) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            this.setState({
                long: long,
                lat: lat
            })
            console.log(this.state.long)
            console.log(this.state.lat)

            const apiKey = "282e9ed46fc324d3723c7446a8268ff2";
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${apiKey}&units=metric`)
                .then((res) =>
                    res.json()
                ).then(function (data) {
                console.log(data)
                that.setState({
                        city: data.name,
                        country: data.sys.country,
                        temperature: data.main.temp,
                        pressure: data.main.pressure,
                        humidity: data.main.humidity,
                        description: data.weather[0].description,
                        wind: data.wind.speed,
                })
            })
        })


    }

    render() {
        return (
            <div>
            <WeatherConditions
                city={this.state.city}
                country={this.state.country}
                temperature={this.state.temperature}
                pressure={this.state.pressure}
                humidity={this.state.humidity}
                description={this.state.description}
                wind={this.state.wind}
                errors={this.state.errors}
            />
            </div>
        )
    }
}

export default AppTwo
